// //Declarando uma função

// function soma(n1, n2){
//     console.log(n1 + n2);
// }

// var numero1 = 5, 
//     numero2 = 7;

// soma(numero1, numero2);

// //Funções anônimas e callbacks
// //Exemplo de Callback

// function myFunc(){
//     console.log('Hello');
// }

// setTimeout(myFunc, 5000);

// //Função Anônima
// setTimeout(function(){
//     console.log('Ola sou anônima');
// }, 7000)


//Arrow Functions
// setTimeout(()=>{
//     console.log('Sou uma arrow function');
// }, 5000)

function minhaFuncao(outraFuncao){
    console.log(outraFuncao());
}

minhaFuncao(()=> 8 + 8);