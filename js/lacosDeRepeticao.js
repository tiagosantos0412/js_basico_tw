// //Laço de reptição com for
// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

// //Laço de repetição com while
// var i = 0,
//     contador = 0;

// while(contador <= 20){
//     console.log(i);
//     i ++;
//     contador ++;
// }

// //Laço de repetição com do while
// var n = 7
//     controle = 0;
// do{
//     console.log(`${n} x ${controle} = `, n * controle);
//     controle ++;
// }while(controle <= 10);

//Laço de repetição com break e continue
//break
for(var i = 0; i <=5; i++){
    if(i == 4){
        console.log(`Encontrei o número ${i}`);
        break;
    }
    console.log(i);
}

//continue
for(var i = 0; i <=10; i++){
    if(i == 4){
        console.log(`Pulei o número ${i}`);
        continue;
    }
    console.log(i);
}