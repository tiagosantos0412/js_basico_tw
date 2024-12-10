/*
    Explicação Rápida:
    Operadores Lógicos: Combinam condições (&&, ||, !).
    Aritméticos: Realizam operações matemáticas (+, -, *, /, %, **).
    Igualdade: Comparam valores com ou sem considerar o tipo (==, ===).
    Relacionais: Comparam valores (>, <, >=, <=).
    Concatenação de Strings: Usa + para unir strings.
    Unários: Afetam uma variável individualmente (++, --, -).
    Ternário: Retorna um valor baseado em uma condição (condição ? valor1 : valor2).
    Conversão Automática de Tipos: JavaScript converte automaticamente o tipo para fazer a operação (+ e - funcionam de maneiras diferentes com strings e números).
    Este exemplo mostra a variedade de operadores e como eles são usados em diferentes contextos no JavaScript.
*/

// Operadores Lógicos (AND, OR, NOT)
let isAdult = true;
let hasTicket = false;
console.log("Pode entrar:", isAdult && hasTicket); // false (AND)
console.log("Pode entrar com ticket ou se adulto:", isAdult || hasTicket); // true (OR)
console.log("Não é adulto:", !isAdult); // false (NOT)

// Operadores Aritméticos
let a = 10;
let b = 5;
console.log("Soma:", a + b); // 15
console.log("Subtração:", a - b); // 5
console.log("Multiplicação:", a * b); // 50
console.log("Divisão:", a / b); // 2
console.log("Resto da divisão:", a % b); // 0
console.log("Potência:", a ** b); // 100000

// Operadores de Igualdade
let x = 5;
let y = "5";
console.log("Igualdade não estrita:", x == y); // true (compara valor, ignora tipo)
console.log("Igualdade estrita:", x === y); // false (compara valor e tipo)

// Operadores Relacionais
let age = 18;
console.log("Maior que:", age > 18); // false
console.log("Maior ou igual a:", age >= 18); // true
console.log("Menor que:", age < 18); // false
console.log("Menor ou igual a:", age <= 18); // true

// Concatenação de Strings
let firstName = "João";
let lastName = "Silva";
let fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName); // João Silva

// Operadores Unários
let number = 10;
console.log("Incremento:", ++number); // 11 (pré-incremento)
console.log("Decremento:", --number); // 10 (pré-decremento)
console.log("Inverter sinal:", -number); // -10

// Operador Ternário
let ageCheck = 20;
let canVote = (ageCheck >= 18) ? "Pode votar" : "Não pode votar";
console.log("Verificação de voto:", canVote); // Pode votar

// Conversão Automática de Tipos
let result = "5" - 3; // String "5" é convertida para número 5
console.log("Resultado da conversão automática (5 - 3):", result); // 2

result = "5" + 3; // Número 3 é convertido para string "3"
console.log("Resultado da conversão automática (5 + 3):", result); // "53"

