export class StudentClass {
   private id: string = Math.floor(Date.now() * Math.random()).toString(36)
   private nome: string
   private data_nasc: Date
   private email: string
   private turma_id: string

    constructor(nome:string, data_nasc:Date, email:string, turma_id:string){
        
        this.nome = nome
        this.data_nasc = data_nasc
        this.email = email
        this.turma_id = turma_id
    }
    
 
 getId():string{
   return this.id
 }
 getNome():string {
    return this.nome
 }
 getdataNasc():Date{
    return this.data_nasc
 }
 getEmail():string{
    return this.email
 }
 getTurmaId():string{
    return this.turma_id
 }
}
