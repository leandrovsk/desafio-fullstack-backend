import "reflect-metadata"
import "express-async-errors"
import express, { Application } from 'express'
import { loginRoutes } from "./routes/login.routes"
import userRoutes from "./routes/users.routes"
import { handleAppError } from "./middlewares/handleAppError.middleware"
import { contactsRoutes } from "./routes/contacts.routes"
import cors from "cors"


const app: Application = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use("/login", loginRoutes)
app.use("/users", userRoutes)
app.use("/contacts", contactsRoutes)
app.use(handleAppError)

export default app