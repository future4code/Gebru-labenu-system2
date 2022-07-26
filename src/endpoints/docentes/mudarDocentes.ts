import { Request, Response } from "express";
import { connection } from "../../connection";
import { selecionarDocentes } from "../../dados/docentes/selecionarDocentes";
import { selecionarTurma } from "../../dados/turma/selecionarTurma";

export const mudarDocentes = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const { id, turmaId }: { id: string; turmaId: string } = req.body;

    const verificaDocente = await selecionarDocentes(id);

    const verificaTurma = await selecionarTurma(turmaId);

    if (!id || !turmaId) {
      errorCode = 422;
      throw new Error("Informe todos os valores");
    }

    if (verificaDocente.length === 0 || verificaTurma.length === 0) {
      throw new Error("Verifique os dados informados");
    }

    const mudaTurma = await connection("DOCENTE")
      .where("id", id)
      .update({ turma_id: turmaId });

    res.status(201).send("Turma alterada");
  } catch (error: any) {
    res.status(errorCode).send(error.message || error.sqlMessage);
  }
};
