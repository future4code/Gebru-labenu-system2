import { Pessoas } from "./Pessoas"

export class Docentes extends Pessoas {

    private especialidade: string
    constructor(nome: string, email: string, dataNasc: string, especialidade: string) {
      super(nome, email, dataNasc) 
      this.especialidade = especialidade}
    }
