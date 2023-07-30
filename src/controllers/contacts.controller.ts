import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContacts.service";
import { listContactsService } from "../services/contacts/listContacts.service";
import { updateContactService } from "../services/contacts/updateContacts.service";
import { deleteContactsService } from "../services/contacts/deleteContacts.service";

const createContactController = async (req: Request, res: Response): Promise<Response> => {

    const userId = res.locals.userId
    const newContact = await createContactService(req.body, userId)

    return res.status(201).json(newContact)
}

const listContactController = async (req: Request, res: Response): Promise<Response> => {

    const userId = res.locals.userId
    const contacts = await listContactsService(userId)

    return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    const updateContacts = await updateContactService(req.body, req.params.id)

    return res.json(updateContacts)
}

const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    await deleteContactsService(req.params.id)

    return res.status(204).json()
}

export { createContactController, updateContactController, listContactController, deleteContactController }