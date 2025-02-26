//acessando um elemento pelo nome da tag
// acessando_elementos.js
var tagName = document.getElementsByTagName('h1');
console.log(tagName);
console.log(tagName[0].textContent); // Exibe o conteúdo do primeiro <h1>

//acessando um elemento pelo id
var tagId = document.getElementById('lista');
console.log(tagId);

//acessando um elemento pela classe
var tagClass = document.getElementsByClassName('list-item');
console.log(tagClass);
console.log(tagClass[0].textContent);
console.log(tagClass[1].textContent);
console.log(tagClass[2].textContent);

//acessando um elemento com seletores
var tagSelector = document.querySelector('#nome');
console.log(tagSelector);

var tagSelectorAll = document.querySelectorAll('.botao');
console.log(tagSelectorAll);
console.log(tagSelectorAll[0].textContent);
console.log(tagSelectorAll[1].textContent);
console.log(tagSelectorAll[2].defaultValue);

//alterando o valor de um elemento
//repeti o código para entender a didática
tagClass = document.getElementsByClassName('list-item');
var item_1 = tagClass[0];
console.log(item_1.textContent);
item_1.textContent = 'Palmeiras';
console.log(item_1.textContent);

//alterando o valor do html
document.querySelector('.subtitulo').innerHTML = '<em><h3>Seção 1</h3></em>';

//alterando o elemento html
console.log(document.querySelector('.footer').outerHTML);

