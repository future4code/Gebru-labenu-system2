import app from "./app"
import {createStudent} from "./endpoints/estudante/createStudent"
import { buscarTurmaAtiva } from "./endpoints/turma/buscarTurmaAtiva"
import { criarTurma } from "./endpoints/turma/criarTurma"
import { mudarTurmaDeModulo } from "./endpoints/turma/mudarTurmaDeModulo"
import {buscarDocentes} from "./endpoints/docentes/buscarDocentes"
import {criarDocente} from "./endpoints/docentes/criarDocente"
import {mudarDocentes} from "./endpoints/docentes/mudarDocentes"


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

// Criar Docentes
app.post("/docente/criar", criarDocente)

//Localizar docentes

app.get ("/docente/buscar", buscarDocentes)

// // Uppdate - Mudar docente de turma  

app.put("/docente/mudar-de-turma", mudarDocentes )