var meuArray = [1,2,3];
var meuArray2 = Array(4,5,6);

console.log(meuArray.concat(meuArray2));
console.log(meuArray.includes(3));
console.log(meuArray.indexOf(3));

//Converter elementos do array para um string juntando todos
var texto = meuArray.concat(meuArray2).join(',');
console.log(texto);

var texto2 = 'abcdefghijklmnopqrstuvxz';
texto2 = texto2.split('').join(' - ');
console.log(texto2);

meuArray.push(4);
console.log(meuArray);

meuArray.pop(4);
console.log(meuArray);
