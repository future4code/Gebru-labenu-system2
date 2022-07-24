import {Request, Response} from "express";
import { connection } from "../../connection";
import { StudentClass } from "../../entidades/StudentClass";

export const createStudent = async (req:Request, res:Response):Promise<void>=>{
  let errorCode = 400
    try{
      
      let nome = req.body.nome;
      let data_nasc = req.body.data_nasc;
      let email = req.body.email;
      let turma_id = req.body.turma_id;

      const aluno: StudentClass = new StudentClass(nome, data_nasc, email, turma_id)
      
      if(!nome || !data_nasc || !email || !turma_id){
        errorCode= 422
       throw new Error("Insira os dados solicitados corretamente") 
      }
      const novoEstudante = await connection("ESTUDANTE")
      .insert({
        id: aluno.getId(),
        nome: aluno.getNome(),
        data_nasc: aluno.getdataNasc(),
        email: aluno.getEmail(),
        turma_id: aluno.getTurmaId()
      })

    res.status(201).send("Estudante adicionado")
        

    }catch(error:any){
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")

    }
}
