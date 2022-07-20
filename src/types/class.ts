export class Turma {
  private id: number
  private nome: string
  private modulo: number

  constructor (nome: string){
    this.nome = nome
  }

  getId(): number {
    return this.id
  }

  getNome(): string {
    return this.nome
  }

  getModulo(): number {
    return this.modulo
  }
}

