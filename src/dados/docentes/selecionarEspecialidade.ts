import { connection } from "../../connection";

export const selecionarEspecialidade = async (id: string): Promise<any[]> => {

  const resultado = await connection()
    .select("DOCENTE_ESPECIALIDADE")
    .join("ESPECIALIDADE", "ON","ESPECIALIDADE.id", "DOCENTE_ESPECIALIDADE.especialidade_id")
    .where("docente_id", id)

  return resultado
}
