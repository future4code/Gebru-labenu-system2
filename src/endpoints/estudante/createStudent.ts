import {Request, Response} from "express";
import { connection } from "../../connection";
import { StudentClass } from "../../entidades/StudentClass";

export default async function createStudent (req:Request, res:Response):Promise<void>{
    try{
        const {nome, email, data_nasc, turma_id} = req.body
        
      if (!nome || !email || !data_nasc || !turma_id) {
        res.statusCode = 422
        throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
    }
    const id: string = Date.now().toString()
    const newStudent = new StudentClass(id,nome, email,data_nasc, turma_id)

    await connection("Estudante").insert(newStudent)
    .insert({
        
      })
    res.status(201).send("Estudante criado!")


    }catch(error:any){
        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")

    }
}
