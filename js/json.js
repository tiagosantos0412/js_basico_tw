//JSON = JavaScript Object Notation
//Uma Notação de um Objeto JavaScript

var objetoTeste = {a: 1, b: 2};

console.log(objetoTeste);

myStr = JSON.stringify(objetoTeste);

console.log(myStr);

myStr = JSON.parse(myStr);

console.log(typeof(myStr));
