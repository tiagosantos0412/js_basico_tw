/**
 * Criando um objeto literal - diretamente no código
 */

var aluno = {
    nome: 'Tiago',
    idade: 38,
    ra: '236655',
    statusMatricula: false,
    ferias: true,
    estudar: ()=>{
        console.log('A pessoa está estudando!')
    },
    condicao: ()=> {
        if(aluno.statusMatricula === true && aluno.ferias === false){
            console.log(`O aluno ${aluno.nome} está no ano letivo!`)
        }else if(aluno.ferias === true && aluno.statusMatricula === true){
            console.log(`O aluno ${aluno.nome}, está de férias`)
        }else {
            console.log(`O aluno ${aluno.nome}, não está matriculado no período letivo!`)
        }
    }

}

var myObj = {
    length: 15,
    color: 'yellow',
    write: function() {
        console.log('Hello')
    }
}

console.log(aluno.condicao())