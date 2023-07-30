import { Router } from "express";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schemas";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureEmailNotExistsMiddleware } from "../middlewares/ensureEmailNotExists.middleware";
import { ensureUserMatches } from "../middlewares/ensureUserMatches.minddleware";

const userRoutes = Router()

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.get("", ensureTokenIsValidMiddleware, listUserController)
userRoutes.patch("/:id", ensureTokenIsValidMiddleware, ensureUserMatches, ensureEmailNotExistsMiddleware, ensureDataIsValid(userSchemaUpdate), updateUserController)
userRoutes.delete("/:id", ensureTokenIsValidMiddleware, ensureUserMatches, deleteUserController)


export default userRoutes