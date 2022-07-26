import { Request, Response } from "express";
import { connection } from "../../connection";
import { Docentes } from "../../entidades/docentes";

export const criarDocente = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const docente = new Docentes(
      req.body.nome,
      req.body.dataNasc,
      req.body.email,
      ""
    );
    console.log(docente)

    const id = Math.floor(Date.now() * Math.random()).toString(36);

    if (
      !req.body.nome ||
      !req.body.email ||
      !req.body.dataNasc 
      
    ) {
      errorCode = 422;
      throw new Error("Preencha os campos corretamente");
    }

    if (!docente.transformarDataNasc(req.body.dataNasc)) {
      errorCode = 422;
      throw new Error("Informe uma data de nascimento válida");
    }

    const novoDocente = await connection("DOCENTE").insert({
      id: docente.getId(),
      nome: docente.getNome(),
      email: docente.getEmail(),
      data_nasc: docente.transformarDataNasc(req.body.dataNasc),
      turma_id: docente.getTurmaId(),
    });

    // const especialidades = req.body.especialidades;
    // for (let esp of especialidades) {
    //   const idRelacao = Math.random().toString;

    //   const idEspecialidade = Math.random().toString();
    //   await connection("ESPECIALIDADE").insert({
    //     id: idEspecialidade,
    //     nome: esp,
    //   });
    //   await connection("docente_especialidade").insert({
    //     id: idRelacao,
    //     docente_id: docente.getId(),
    //     especialidade_id: idEspecialidade,
    //   });
    // }

    res.status(201).send("Docente cadastrado");
  } catch (error: any) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
};
