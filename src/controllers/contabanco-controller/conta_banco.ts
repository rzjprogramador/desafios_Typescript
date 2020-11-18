class ContaBanco {
  public numConta?: number
  protected tipo?: string
  private dono?: string
  private saldo: number
  private status: boolean

  constructor(
    numConta: number,
    tipo: string,
    dono: string,
    saldo: number,
    status: boolean,
  ) {
    this.saldo = saldo
    this.status = status
  }

  set setNumConta(n: number) {
    this.numConta = n
  }
  get getNumConta() {
    return this.numConta
  }

  set setTipo(t: string) {
    this.tipo = t
  }
  get getTipo() {
    return this.tipo
  }

  set setDono(d: string) {
    this.dono = d
  }
  get getDono() {
    return this.dono
  }

  set setSaldo(s: number) {
    this.saldo = s
  }
  get getSaldo() {
    return this.saldo
  }
  set setStatus(st: boolean) {
    this.status = st
  }
  get getStatus() {
    return this.status
  }

  public abrirConta(t: string): void {
    this.setTipo = t
    this.setStatus = true
    if (t === 'CC') {
      this.saldo = 50
    } else if (t === 'CP') {
      this.saldo = 150
    }
  }

  public fecharConta(): void {
    if (this.saldo > 0) {
      console.log('Conta com dinheiro !')
    } else if (this.saldo < 0) {
      console.log('Conta em débito')
    } else this.setStatus = false
  }

  public depositar(): void {}

  public sacar(): void {}

  public pagarMensal(): void {}
}

// const teste = new ContaBanco(111, 'CC', 'rei', 40, false)
// teste.abrirConta
