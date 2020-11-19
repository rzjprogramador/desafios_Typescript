/*
CONCEITOS :  
QUANDO TIPAR :: ao DECLARAR
*/

//boolean ( true / false)
let isAbrir: boolean // declarar e tipar
isAbrir = true // usar a variavel tipada

// string ( 'foo', "foo", `foo ${}`)
let mensagem: string
mensagem = `qualquer texto ${isAbrir}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array [Tem que informar o que tem dentro do array] (exemplo : tipo[] )
let items: number[]  // outra forma chamada Generic ::: Array<number>
items = [1, 2, 3]

//tuple (è um array que ja sabeomos o numero de elementos e tipos dentro dele)
let title: [number, string, boolean]
title = [1, "Reinaldo", true]

// enum (Enumerator para criar conjunto de chaves e valor)
enum Colors {
    branco = '#fff',
    preto = '#000'
    // neste exemplo ao inves de chamar pelo hexadecimal mais dificil chamamos este valor pelo nome que declaramos no enum tipo um apelido
}

// any (Significa qualquer coisa , pode ser um boolean,string,number -- não é legal usar,mesma coisa de nao tipar)
let coisa: any
coisa = [1] // ou coisa = string 

// void (vazio) (Não retorna nada)(Serve pra tipar funções que nao retorna nada)
function logger(): void {
    console.log('foo')
}

// null -- undefined
// Neste exemplo mostramos que Bla pode ser string ou undefined 
// null ::: Não é aconselhavel usar como tipo primitivo- senao dps nao pode mudar valor dela)
type Bla = string | undefined

// never (nunca vai retornar) ( usa quando for jogar erro na tela, um erro nunca é um retorno de nada é uma excessao)
// tipo esta função nunca vai retornar nada , só vai jogar um erro na tela
function error(): never {
    throw new Error("error")
}

// object ( tudo aquilo que nao é string,nem number, nem boolean é qualquer coisa que nao seja um tipo primitivo é um objeto)
// tem que passar um objeto com chave e valor
let cart: object
cart = {
    key: "fi"
    // Se passar que é true, string ou outro primitivo vai reclamar, tem que passar um objeto com chave e valor
}

// TIPO POR INFERENCIA ================================================================================================
// tipo por inferencia // EVITA A ARREDUNDANCIA E FICAR TIPANDO TUDO ..JA DEFINIU NO VALOR O TIPO
// ja declara e da o valor o typescript ja infere ja sabe o tipo , vc nao consegue mudar o tipo depois , por ja estar passado o tipo quando vc colocou o tipo no valor

let mensagem2 = "mensagem definida"  // NÃO PRECISA TIPAR assim :: let mensagem2: string = "mensagem definida"
// Se tentar mudar assim ::: mensagem2 = 1 // nao vai deixar porque essa var ja foi definida como string na assinatura

// NÃO DEIXA PEGAR UMA PROPRIEDADE QUE NAO TEM NO EVENTO 
// Estou escutando o window com eventListener não preciso tipar isso ele sabe que o parametro (e) desse evento dispoem um target para ser usado se tentasse outro elemento ele reclamaria

window.addEventListener("click", (e) => {
    console.log(e.target)
})

//================================================================================================
