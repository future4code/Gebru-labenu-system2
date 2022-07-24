import app from "./app"
import {createStudent} from "./endpoints/estudante/createStudent"
import { changeStudentClass } from "./endpoints/estudante/changeStudentClass"
import { getStudent } from "./endpoints/estudante/getStudent"
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
app.get("/estudante", getStudent)


//Criar estudante
app.post("/estudante/criar", createStudent)

//Mudar estudante de turma
app.patch("/estudante", changeStudentClass)