// Cria um objeto Date com a data atual
const data = new Date();

// Obtém o dia, mês e ano
const dia = String(data.getDate()).padStart(2, '0'); // Garante 2 dígitos
const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa em 0, então adicionamos 1
const ano = data.getFullYear();

// Formata a data no formato brasileiro (dia/mês/ano)
const dataFormatada = `${dia}/${mes}/${ano}`;

console.log(dataFormatada); // Exibe a data no formato brasileiro