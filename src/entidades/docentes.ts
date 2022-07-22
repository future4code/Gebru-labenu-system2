export class Docentes {
    private id: string = Math.floor(Date.now() * Math.random()).toString(10)
    private nome: string
    private data_nasc: number
    private email: string
    private turma_id: string
 
     constructor(id:string, name:string, birth:number, email:string, address:string){
         this.id = id
         this.nome = name
         this.data_nasc = birth
         this.email = email
         this.turma_id = address
     }
     
  
  getId():string{
    return this.id
  }
  getNome():string {
     return this.nome
  }
  getdataNasc():number{
     return this.data_nasc
  }
  getEmail():string{
     return this.email
  }
  getTurmaId(){
     return this.turma_id
  }
 }