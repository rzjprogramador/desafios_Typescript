export default class ContaBanco {
  public numConta?: number
  protected tipo?: string
  private dono?: string
  private saldo: number
  private status: boolean

  constructor({ numConta, tipo, dono, saldo, status }: ContaBanco) {
    this.saldo = 0
    this.status = false
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
  set setStatus(status: boolean) {
    this.status = status
  }
  get getStatus() {
    return this.status
  }

  public abrirConta(t: string): void {
    this.setTipo = t
    this.setStatus = true
    if (t === 'CC') {
      this.setSaldo = 50
    } else if (t === 'CP') {
      this.setSaldo = 150
    }
    console.log('Conta aberta com sucesso !')
  }

  public fecharConta(): void {
    if (this.getSaldo > 0) {
      console.log('Conta não pode ser fechada porque está com dinheiro !')
    } else if (this.getSaldo < 0) {
      console.log('Conta em débito não pode ser fechada')
    } else this.setStatus = false
    console.log('Conta fechada com sucesso.')
  }

  public depositar(v: number): void {
    if (this.getStatus) {
      this.setSaldo = this.setSaldo + v
      // this.setSaldo(this.getSaldo + v)
      console.log(`Deposito realizado com sucesso na conta de ${this.getDono}`)
    } else {
      console.log('Impossivel depositar em uma conta fechada')
    }
  }

  public sacar(v: number): void {
    if (this.getStatus) {
      if (this.getSaldo >= v) {
        this.setSaldo = this.getSaldo - v
        console.log(`Saque realizado na conta de ${this.getDono}`)
      } else {
        console.log('Saldo insuficiente para saque')
      }
    } else {
      console.log('Impossivel sacar de uma conta fechada!')
    }
  }

  public pagarMensal(): void {
    let v: number
    if (this.getTipo === 'CC') {
      v = 12
    } else if (this.getTipo === 'CP') {
      v = 20
    }
  }
}
