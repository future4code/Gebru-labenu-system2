// import {Request, Response} from "express";
// import { connection } from "../../connection";
// import { Docentes } from "../../entidades/docentes";

// export const criarDocente = async (req:Request, res:Response):Promise<void>=>{
//   let errorCode = 400
//     try{const docente = new Docentes (req.body.nome, req.body.email, req.body.dataNasc, req.body.especialidade)
     
//         const especialidade = docente.getEspecialidades().find(e => e === req.body.especialidade)
//         const idEspecialidade = docente.getEspecialidades().findIndex(e => e === req.body.especialidade) + 1
//         const id = Math.floor(Date.now() * Math.random()).toString(36)
    
//         if (!req.body.nome || !req.body.email || !req.body.dataNasc || !req.body.especialidade) {
//             errorCode = 422
//           throw new Error("Preencha os campos corretamente")
//         }
    
//         if (especialidade === undefined) {
//             errorCode = 422
//           throw new Error("Informe uma especialidade válida")
//         }
    
//         if (!docente.transformarDataNasc(req.body.dataNasc)) {
//             errorCode = 422
//           throw new Error("Informe uma data de nascimento válida")
//         }
    
//         const novoDocente = await connection("docente")
//           .insert({
//             id: docente.getId(),
//             nome: docente.getNome(),
//             email: docente.getEmail(),
//             data_nasc: docente.transformarDataNasc(req.body.dataNasc),
//             turma_id: docente.getTurmaId()
//           })
    
//         const especialidadeDocente = await connection("docente_especialidade")
//           .insert({
//             id: id,
//             docente_id: docente.getId(),
//             especialidade_id: idEspecialidade
//           })
    
//         res.status(201).send("Docente cadastrado")
    
//       } catch (error: any) {
//         res.status(errorCode).send(error.message || error.sqlMessage)
//       }
//     }