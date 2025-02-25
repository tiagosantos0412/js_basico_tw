var Tabuleiro = {
    campo: [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    posicao: [0,0],
    subir(){
        if(this.posicao[0] > 0){
            this.posicao[0] --;
        }
        this.print();
    },
    descer(){
        if(this.posicao[0] < this.campo.length -1){
            this.posicao[0] ++;
        }
        this.print();
    },
    esquerda(){
        if(this.posicao[1] > 0){
            this.posicao[1] --;
        }
        this.print();
    }, 
    direita(){
        if(this.posicao[1] < this.campo[this.posicao[0]].length -1){
            this.posicao[1] ++;
        }
        this.print();
    },
    print(){
        var linhaStr = '';
        for(let i = 0; i < this.campo.length; i++){
            var linha = this.campo[i];
            for(let j = 0; j < linha.length; j++){
                if(this.posicao[0] === i && this.posicao[1] === j){
                    linhaStr += '| x |';
                }else {
                    linhaStr += '|   |';
                }
            }
            linhaStr += '\n';
        }
        console.log(linhaStr);
    }
};

Tabuleiro.print();
Tabuleiro.direita();
Tabuleiro.descer();
Tabuleiro.esquerda();