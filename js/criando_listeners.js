// document.querySelector('#nome').addEventListener('click', 
//     ()=>{
//         console.log('Elemento clicado')
//     });

var obter_dados = ()=>{console.log('Botão clicado!');}

document.querySelector('#enviar').addEventListener('click', obter_dados);

document.querySelector('#enviar').removeEventListener('click', obter_dados);

/**
 * click

disparado quando um clique é feito com o botão esquerdo do mouse

dblclick

disparado quando um duplo clique é feito com o botão esquerdo do mouse

contextmenu

disparado quando o botão direito do mouse é clicado

mousemove

disparado continuamente enquanto o cursor se mover sobre um elemento

mousedown

disparado quando o botão esquerdo do mouse for pressionado

mouseup

disparado quando o botão esquerdo do mouse for solto
 */

/**
 * Eventos de Teclado
keydown

disparado quando qualquer tecla for pressionada

keypress

disparado continuamente enquanto qualquer tecla estiver sendo pressionada (com exceção de Shift, Fn e CapsLock)

keyup

disparado quando qualquer tecla for solta

 */

/**
 * Eventos de Formulário e de Foco
reset

disparado quando o formulário for apagado

submit

disparado quando o formulário for enviado

focus

disparado quando um elemento recebe foco

blur

disparado quando um elemento perde foco
 */