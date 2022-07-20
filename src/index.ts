import app from "./app"
import { createClass } from "./endpoints/turma/createClass"

app.post("/class", createClass)