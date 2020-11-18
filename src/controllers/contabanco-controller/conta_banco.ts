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

  public abrirConta(): void {}
  public fecharConta(): void {}
  public depositar(): void {}
  public sacar(): void {}
  public pagarMensal(): void {}
}
