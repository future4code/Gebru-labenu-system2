import app from "./app"
import {createStudent} from "./endpoints/estudante/createStudent"
import { buscarTurmaAtiva } from "./endpoints/turma/buscarTurmaAtiva"
import { criarTurma } from "./endpoints/turma/criarTurma"
import { mudarTurmaDeModulo } from "./endpoints/turma/mudarTurmaDeModulo"


//Localizar
app.get("/turma", buscarTurmaAtiva)


//Criar
app.post("/turma/criar", criarTurma)


//Update
app.put("/turma/editar", mudarTurmaDeModulo)


//Pegar estudante pelo nome
// app.get("/estudante/:nome", getStudent)


//Criar estudante
app.post("/estudante/criar", createStudent)