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
  set setStatus(sd: boolean) {
    this.status = sd
  }
  get getStatus() {
    return this.status
  }

  public abrirConta(): void {}
  public fecharConta(): void {}
  public depositar(): void {}
  public sacar(): void {}
  public pagarMensal(): void {}
}
