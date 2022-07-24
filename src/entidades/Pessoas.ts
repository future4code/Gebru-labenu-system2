export class Pessoas {
    protected id: string = Math.floor(Date.now() * Math.random()).toString(36)
    protected nome: string
    protected email: string
    protected dataNasc: string
    protected turmaID: string = "1"
  
    constructor(nome: string, email: string, dataNasc: string) {
      this.nome = nome
      this.email = email
      this.dataNasc = dataNasc
    }
  
    getId(): string {
      return this.id
    }
  
    getNome(): string {
      return this.nome
    }
  
    getEmail(): string {
      return this.email
    }
  
    getDataNasc(): string {
      return this.dataNasc
    }
  
    getTurmaId(): string {
      return this.turmaID
    }
  
    transformarDataNasc(data: string): string | undefined {
      const testagem = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/
      if (testagem.test(data)) {
        const dataEditada = data.split("/")
        return dataEditada[2] + "-" + dataEditada[1] + "-" + dataEditada[0] as string
      }
    }
  }