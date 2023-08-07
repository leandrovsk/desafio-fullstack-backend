import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schemas";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureUserIsOwnerMiddleware } from "../middlewares/ensureUserIsOwner.middleware";
import { ensureEmailNotExistsMiddleware } from "../middlewares/ensureEmailNotExists.middleware";
import { ensureContactIdExistsMiddleware } from "../middlewares/ensureContactIdExists.middleware";

const contactsRoutes = Router();

contactsRoutes.post("", ensureTokenIsValidMiddleware, ensureDataIsValid(contactSchemaRequest), createContactController);
contactsRoutes.get("", ensureTokenIsValidMiddleware, listContactController);
contactsRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactIdExistsMiddleware,
  ensureUserIsOwnerMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactIdExistsMiddleware,
  ensureUserIsOwnerMiddleware,
  deleteContactController
);

export { contactsRoutes };
