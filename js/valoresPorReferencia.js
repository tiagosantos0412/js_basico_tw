/**
 * Variáveis trabalham com valores e objetos trabalham com referência
 */

var n1 = 10;
n2 = n1;

n1 = 8;
console.log(`N1: ${n1}, N2: ${n2}`);
console.log(n1 === n2);

var myObj = {
    length: 15, color: 'yellow'
};

var myObj2 = myObj;

console.log(`Valor myobj [cor]: ${myObj.color}, Valor myobj2 [cor]: ${myObj2.color}`);

myObj.color = 'green';

console.log(`Valor myobj [cor]: ${myObj.color}, Valor myobj2 [cor]: ${myObj2.color}`);
