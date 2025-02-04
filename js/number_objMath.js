console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isInteger(12));
console.log(Number.isInteger(1.2));

console.log(Math.pow(6, 3));
console.log(Math.sqrt(9));
console.log(Math.ceil(9.3));
console.log(Math.floor(9.3));
console.log(Math.round(9.3));
console.log(Math.trunc(5.7));
console.log(Math.max(5,7,38,5,12,5));
console.log(Math.min(5,7,38,5,12,5));
var array = [5,7,38,5,12,5];
console.log(Math.max(...array));
var randomNumber = Math.random() * 20 + 1;
console.log(Math.trunc(randomNumber));