// UNION = UNIR TIPOS ===================================================
// Tipo Union = pode ser de um tipo ou de outro ex:

function logDetalhes(uid: number | string, user: string) {
    console.log(`Este produto ${uid} este nome ${user}`)
}
// Definido que uid pode ser number ou string
// Invocando ::
logDetalhes(123, 'Reinaldo')

// ============================================================

// type ALIASES : DEFINIR APELIDO PARA UNIAO DE TIPOS =========================

type Uid = number | string  // com type definir um nome pra receber a junção d etipos e usar na tipagem desejada 

function logDetalhes2(uid: Uid, user: string) {
    console.log(`Este produto ${uid} este nome ${user}`)
}
logDetalhes2('123', 'Reinaldo')


// DEFINIR RETORNO COM TYPE ALIASES =====================================
type Plataforma = 'Windows' | 'Linux'  // defini que o tipo novo Plataforma pode ser windows ou Linux se tentar recupear ou invocar como outra coisa noa vai deixar

function renderPlataforma(plataforma: Plataforma) {
    return plataforma
}
renderPlataforma('Linux')
// renderPlataforma('ios') // TENTEI USAR OUTRA DEFINIÇÃO que nao foi definida o TS não deixou
