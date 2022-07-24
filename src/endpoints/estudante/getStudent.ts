import { connection } from "../../connection";
import { Request, Response } from "express";



export const getStudent = async (req:Request, res:Response):Promise<void>=>{
    let statusCode
    try{
        let nome = req.query.nome

        const result = await connection("ESTUDANTE").where("nome", "like", `%${nome}%`)
        
        if(result.length < 1){
            statusCode = 404
            throw new Error("Nenhum estudante encontrado!")
        }
      
        res.status(200).send(result)
    }catch(error:any){
        console.log(error.sqlMessage || error.message);
         res.status(statusCode || 500).send(error.message)
    }
}


    




