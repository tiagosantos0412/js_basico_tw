var myArray = [2, 3, 4];
var myArray2 = [5, 6, 7];

function soma(n1, n2){
    return n1 + n2;
}

console.log( soma(...myArray));

console.log([1, 2, 3, myArray2]);
console.log([1, 2, 3, ...myArray2]);
console.log(...myArray, ...myArray2);