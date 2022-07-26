import { Request, Response } from "express";
import { connection } from "../../connection";


export const changeStudentClass = async (req: Request, res: Response):Promise <void> =>{
    
    try{
    
    const alteraTurma = await connection("ESTUDANTE")
    .update ({
        turma_id : req.body.turma_id
    }).where({nome:req.query.nome})

    
    res.status(200).send("A turma do aluno foi alterada")
    }catch(error:any){
        console.log(error.message);
        res.status(500).send("Requisição falhou")
    }
}