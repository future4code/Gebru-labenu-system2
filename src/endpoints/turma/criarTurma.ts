import { Request, Response } from "express"
import { connection } from "../../connection"
import { Turma } from "../../entidades/class"

export const criarTurma = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const turma = new Turma(req.body.nome)

    if (!req.body.nome) {
      errorCode = 422
      throw new Error("Informe um nome para a turma")
    }

    const novaTurma = await connection("turma")
      .insert({
        id: turma.getId(),
        nome: turma.getNome(),
        modulo: turma.getModulo()
      })

    res.status(200).send("Turma criada")

  } catch (error: any) {
    res.status(errorCode).send(error.message || error.sqlMessage)
  }
}