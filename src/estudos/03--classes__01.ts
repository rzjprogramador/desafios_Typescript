abstract class UsuarioConta {
    public nome: string
    protected idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    mostrarDetalhes(): void {
        console.log(`O usuario ${this.nome} tem a idade ${this.idade}`)
    }  
}

// Classe de Herança - extendida

class PersonagemConta extends UsuarioConta {
    private nickname: string
    nivel: number

    constructor(nome: string, idade: number, nickname: string, nivel: number) {
        super(nome, idade)

        this.nickname = nickname
        this.nivel = nivel
    }

    // ACESSORS :: ACESSORES ::: --> GET e SET
    /*
    - GET PODEMOS DEFINIR FUNCOES QUE RETORNAM DIFERENTES VALORES PRA PROPRIEDADE				
    - SET VAI DEFINIR NOVO VALOR PARA AS PROPRIEDADES
    */			
    get getNivel() {
        console.log('===GET Permite regra, Logica ,Mudanças Aqui ===')
        return this.nivel
    }

    set setNivel(nivel: number) {
        this.nivel = nivel
    }
}


// RECUPERANDO CLASSE PRIMARIA ==================================
/*
=== COMENTEI PORQUE NAO POSSO MAIS ESTANCIAR ESSA CLASSE AGORA ELA É ABSTRACT ---CLASSE ABSTRATA =====
// Estanciando a Classe
const programador = new UsuarioConta('Reinaldo', 43)
//Recuperando a classe Instanciada
console.log(programador)
// console.log(programador.idade) // este atributo agora esta protected e nao posera ser chamado fora da classe ou sub classe
//Mostrar metodo sendo usado com o objeto instanciado
programador.mostrarDetalhes()

// Estanciando a Classe novamente para novo Usuario
const novoCara = new UsuarioConta('Fulano', 58)
//Recuperando a classe Instanciada
console.log(novoCara)
// console.log(novoCara.idade)  // este atributo agora esta protected e nao posera ser chamado fora da classe ou sub classe

*/

// RECUPERANDO CLASSE HERDADA ==================================
const guga = new PersonagemConta('Guga', 10, 'gugaeduardo', 199)

// Tentando chamar atributo Privado ======
// console.log(guga.nickname) Ele nem deixa nickname esta atributo privado

// readonly ::: pode ler mas nao pode editar
console.log(guga.nivel)
console.log(`O nivel de guga é ${guga.nivel}`)
// guga.nivel = 799 // Não deixa porque o nivel dele esta em reaonly --só pode ser lido nao editado

// Recuperando Get 
// Getter chama como uma propriedade , mas na verdade é uma função ali dentro
console.log(guga.getNivel)

// Set Setar neste caso vamos definir setar o nivel que recebeu o set
guga.setNivel = 499
console.log(`Agora foi setado o nivel de guga em ${guga.nivel}`)

