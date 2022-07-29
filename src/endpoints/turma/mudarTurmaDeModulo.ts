import { Request, Response } from "express"
import { connection } from "../../connection"
import { selecionarTurma } from "../../dados/turma/selecionarTurma"

export const mudarTurmaDeModulo = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400
  try {
    const { id, modulo }: { id: string, modulo: string } = req.body

    const valoresModulo: string[] = ["1", "2", "3", "4", "5", "6"]

    const verificaTurma = await selecionarTurma(id)

    const identificaModulo = valoresModulo.find(e => e === modulo)

    if (!id || !modulo) {
      errorCode = 422
      throw new Error("Informe os dados corretamente")
    }

    if (verificaTurma.length === 0) {
      errorCode = 422
      throw new Error("Informe uma turma válida")
    }

    if (identificaModulo === undefined) {
      errorCode = 422
      throw new Error("Informe um módulo válido")
    }

    const mudarTurma = await connection("TURMA")
      .where("id", id)
      .update({ modulo })

    res.status(201).send("Módulo alterado")

  } catch (error: any) {
    res.status(errorCode).send(error.message || error.sqlMessage)
  }
}