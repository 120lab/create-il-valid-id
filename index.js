

function randomID() {
	var val = "999";
	for (var i = 0; i < 5; i++)
		val += '' + parseInt(Math.random() * 10);
	val += '' + calcCode(val);
	return val;
}


function calcCode(val) {
	var sum = 0;
	for (var i = 0; i < 8; i++) {
		var digit = parseInt(val[i]);
		if (isNaN(digit))
			return;
		var result = digit * (i % 2 == 0 ? 1 : 2);
		while (result > 0) {
			sum += result % 10;
			result = parseInt(result / 10);
		}
	}
	return (10 - (sum % 10)) % 10;
}
  
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
arr.forEach(element => {
var newone = randomID();
console.log(element, newone);
});

