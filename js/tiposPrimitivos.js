/**
 * 
 
    O JavaScript possui 6 tipos primitivos no momento, os quais veremos com mais detalhes depois.

    São eles:

    Boolean - possuem apenas dois valores: verdadeiro ou falso;
    Undefined - indica que não foi definido um valor;
    Null - indica que um valor é nulo;
    Number - armazena valores numéricos;
    String - armazena textos;
    Symbol - armazena símbolos.
    Temos outros tipos, mas eles são mais complexos, portanto, não são Primitivos. Veremos melhor sobre esses tipos mais para frente.
 */


// Boolean - verdadeiro ou falso
let isJavaScriptFun = true;
console.log("O valor de isJavaScriptFun é:", isJavaScriptFun); // Output: true

// Undefined - valor ainda não definido
let notDefined;
console.log("O valor de notDefined é:", notDefined); // Output: undefined

// Null - valor nulo
let emptyValue = null;
console.log("O valor de emptyValue é:", emptyValue); // Output: null

// Number - valor numérico
let age = 25;
console.log("O valor de age é:", age); // Output: 25

// String - texto
let greeting = "Olá, mundo!";
console.log("O valor de greeting é:", greeting); // Output: Olá, mundo!

// Symbol - símbolo único
let uniqueId = Symbol("id");
console.log("O valor de uniqueId é:", uniqueId); // Output: Symbol(id)
