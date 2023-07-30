import "reflect-metadata"
import "express-async-errors"
import express, { Application } from 'express'
import { loginRoutes } from "./routes/login.routes"
import userRoutes from "./routes/users.routes"
import { handleAppError } from "./middlewares/handleAppError.middleware"
import { contactsRoutes } from "./routes/contacts.routes"


const app: Application = express()
app.use(express.json())
app.use("/login", loginRoutes)
app.use("/users", userRoutes)
app.use("/contacts", contactsRoutes)
app.use(handleAppError)

export default app