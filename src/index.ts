import app from "./app"
import { createClass } from "./endpoints/class/createClass"

app.post("/class", createClass)