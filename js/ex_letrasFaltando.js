function letrasFaltando(text){
    var letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
    text = text.toLowerCase();
    var textoFaltante = [];

    for(let letra of letras){
        if(text.indexOf(letra) === -1){
            textoFaltante.push(letra);
        }
    }
    return textoFaltante;
}

console.log(letrasFaltando('oba'));

/**
 * 
 * Como Melhorar o Código:
Incluir todas as letras do alfabeto:

O array letras está faltando as letras 'w' e 'y'. Para incluir todas as letras do alfabeto, você pode atualizar o array:

javascript
Copy
var letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
Usar includes em vez de indexOf:

O método includes é mais moderno e legível para verificar se uma letra está presente no texto:

javascript
Copy
if (!text.includes(letra)) {
    textoFaltante.push(letra);
}
Código atualizado:

javascript
Copy
function letrasFaltando(text) {
    var letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
    text = text.toLowerCase();
    var textoFaltante = [];

    for (let letra of letras) {
        if (!text.includes(letra)) {
            textoFaltante.push(letra);
        }
    }
    return textoFaltante;
}

console.log(letrasFaltando('oba'));
Saída:

javascript
Copy
[
  'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]
Agora o código está mais completo e fácil de entender! 😊
 */