/*
    Explicação dos Conceitos:
    Declaração de Variáveis:

    let: Variável que pode ser alterada no seu escopo.
    const: Constante cujo valor não pode ser modificado após atribuição.
    var: Declara uma variável global ou com escopo de função, mas é menos recomendada em código moderno.
    Operadores de Atribuição:

    =: Atribui um valor.
    +=, -=, *=, /=, %=, **=: Operadores que combinam uma operação matemática com atribuição.
    Incremento e Decremento:

    ++: Incrementa a variável em 1.
    --: Decrementa a variável em 1.
    Variáveis Globais:

    var: Permite criar variáveis globais (ou variáveis com escopo de função), que podem ser acessadas de fora do escopo em que foram definidas. Evite usar var quando possível, já que let e const têm escopos mais seguros.
    Escopo Local:

    Variáveis let e const têm escopo de bloco, o que significa que só podem ser acessadas dentro do bloco { } onde foram declaradas.
*/

// Declaração de variáveis com let e const
let idade = 25; // Variável que pode ser alterada
const nome = "Maria"; // Constante, não pode ser alterada
console.log("Idade inicial:", idade); // 25
console.log("Nome:", nome); // Maria

// Operadores de Atribuição
idade = 30; // Atribuição simples
console.log("Nova idade:", idade); // 30

idade += 5; // Equivalente a idade = idade + 5
console.log("Idade após += 5:", idade); // 35

idade -= 2; // Equivalente a idade = idade - 2
console.log("Idade após -= 2:", idade); // 33

idade *= 2; // Equivalente a idade = idade * 2
console.log("Idade após *= 2:", idade); // 66

idade /= 3; // Equivalente a idade = idade / 3
console.log("Idade após /= 3:", idade); // 22

idade %= 5; // Equivalente a idade = idade % 5
console.log("Idade após %= 5:", idade); // 2

idade **= 3; // Equivalente a idade = idade ** 3 (potência)
console.log("Idade após **= 3:", idade); // 8

// Incremento e Decremento
let contador = 10;
console.log("Contador inicial:", contador); // 10

contador++; // Incrementa em 1
console.log("Contador após incremento:", contador); // 11

contador--; // Decrementa em 1
console.log("Contador após decremento:", contador); // 10

// Uso de let e const
let cidade = "São Paulo";
const pais = "Brasil";

// Alterando uma variável let
cidade = "Rio de Janeiro";
console.log("Cidade:", cidade); // Rio de Janeiro
console.log("País:", pais); // Brasil

// Variável Global
var globalVar = "Eu sou global!";
function mostrarGlobal() {
    console.log(globalVar); // Acessa a variável global
}
mostrarGlobal(); // Eu sou global!

// Exemplo de escopo local com let e const
function exemploEscopo() {
    let localLet = "Escopo local com let";
    const localConst = "Escopo local com const";
    console.log(localLet); // Escopo local com let
    console.log(localConst); // Escopo local com const
}
exemploEscopo();

// Tentando acessar let e const fora de seu escopo (gera erro)
// console.log(localLet); // ReferenceError
// console.log(localConst); // ReferenceError
