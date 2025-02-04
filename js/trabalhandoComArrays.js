var meuArray = [2,4,6,8,10];

console.log(meuArray.length);

var res = meuArray.every(function(n){
    return n % 2 === 0;
})

console.log(res);
res = meuArray.every(n => n % 2 === 0);
console.log(res);

meuArray = [3,5,11,17,2,4,6,8,10];
res = meuArray.filter(n => n % 2 !== 0);
console.log(res);

res = meuArray.find(n => n > 5);
console.log(res);

var array2 = [1,2,3];
console.log(array2.reduce( (acumulado, atual) => acumulado + atual ));

console.log(meuArray.sort( (a, b) => a > b ? 1 : -1 ));

console.log(meuArray.forEach(n => {
    console.log(n);
}))

console.log(meuArray.map(n => n *2));