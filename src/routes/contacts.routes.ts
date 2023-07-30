import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schemas";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureUserIsOwnerMiddleware } from "../middlewares/ensureUserIsOwner.middleware";
import { ensureEmailNotExistsMiddleware } from "../middlewares/ensureEmailNotExists.middleware";


const contactsRoutes = Router()

contactsRoutes.post("", ensureTokenIsValidMiddleware, ensureDataIsValid(contactSchemaRequest), ensureEmailNotExistsMiddleware, createContactController)
contactsRoutes.get("", ensureTokenIsValidMiddleware, listContactController)
contactsRoutes.patch("/:id", ensureTokenIsValidMiddleware, ensureUserIsOwnerMiddleware, ensureDataIsValid(contactSchemaUpdate), ensureEmailNotExistsMiddleware, updateContactController)
contactsRoutes.delete("/:id", ensureTokenIsValidMiddleware, ensureUserIsOwnerMiddleware, deleteContactController)

export { contactsRoutes }