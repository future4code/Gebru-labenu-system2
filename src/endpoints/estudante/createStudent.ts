import {Request, Response} from "express";
import { connection } from "../../connection";
import { StudentClass } from "../../entidades/StudentClass";

export const createStudent = async (req:Request, res:Response):Promise<void>=>{
  let errorCode = 400
    try{
      const id = Math.floor(Date.now() * Math.random()).toString(10)
      const aluno = new StudentClass(id,req.body.nome, req.body.data_nasc, req.body.email, req.body.turma_id)

      if(!aluno){
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

    res.status(201).send("Turma criada")
        

    }catch(error:any){
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")

    }
}
