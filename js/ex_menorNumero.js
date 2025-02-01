function menorNumero(numero){
    var menor = numero[0];
    for(var i = 0; i < numero.length; i++){
        if(numero[i] < menor){
            menor = numero[i]
        }
    }
    return menor;
}

console.log(menorNumero([4, 5, 8, 3, 8, 1]));
