import app from "./app"
import { buscarTurmaAtiva } from "./endpoints/turma/buscarTurmaAtiva"
import { criarTurma } from "./endpoints/turma/criarTurma"
import { mudarTurmaDeModulo } from "./endpoints/turma/mudarTurmaDeModulo"


//Localizar
app.get("/turma", buscarTurmaAtiva)


//Criar
app.post("/turma/criar", criarTurma)


//Update
app.put("/turma/editar", mudarTurmaDeModulo)

