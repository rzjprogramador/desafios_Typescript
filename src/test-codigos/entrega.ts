class Entrega extends Loja {
  public destinatario: string
  public endereco: string
  public complemento: string
  public cidade: string
  public cep: string
  public status: boolean

  constructor(
    nomeLoja: string,
    destinatario: string,
    endereco: string,
    complemento: string,
    cidade: string,
    cep: string,
    status: boolean,
  ) {
    super(nomeLoja)

    this.destinatario = destinatario
    this.endereco = endereco
    this.complemento = complemento
    this.cidade = cidade
    this.cep = cep
    this.status = status
  }

  public Recolher(): void {}

  public Entregar(): void {}
}
//============================================================
// const entregaJoaquim = new Entrega()
