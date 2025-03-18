setTimeout(() => {
    console.log('esperou 5 segundos');
}, 5000);

var meu_intervalo = setInterval(() => {
    console.log('imprimindo em intervalos');
}, 2000);

clearInterval(meu_intervalo);