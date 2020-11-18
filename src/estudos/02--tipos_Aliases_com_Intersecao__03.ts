// ORGANIZANDO INFORMAÇÕES D EUSUARIO DE JOGO ::: preciso ::
// *** contaInfo
// *** personagemInfo
// *** jogoInfo

// Passando ? torna o atributo :: opcional ao inves de definir como undefined 


// *** Objeto contaInfo =================================
type ContaInfo = {
    id: number
    name: string
    email?: string
}
// Atribuindo ::
const conta: ContaInfo = {
    id: 123,
    name: 'Reinaldo'
    //Não passei email por ser opcional esta com o ? na declaracao de tipos
}

// *** Objeto personagemInfo =================================
type PersonagemInfo = {
    nickname: string
    nivel?: number
}
// Atribuindo ::
const personagem: PersonagemInfo = {
    nickname: 'Reinaldo',
    nivel: 100
}

//  INTERSEÇÃO :: UNIR Objeto DE TIPOS =================================
type NovoJogoInfo = ContaInfo & PersonagemInfo  
// Atribui a nova Objeto NovoJogoInfo a interseção das Objetos ContaInfo e PersonagemInfo

// usando ::: criar nova const e tipar com o novo tipo concebido da interseção das 2 Objetos ..ex:
// todos atributos tem que ser atribuido os valores , se caso não quiser usar tem que colocar ? de opcional na tipagem dos atributos
const jogo: NovoJogoInfo = {
    id: 123,
    name: 'Reinaldo',
    nickname: 'RzjProgramador'
    // nivel não passei aqui ...porque deixei opcional com ? na tipagem da Objeto
}