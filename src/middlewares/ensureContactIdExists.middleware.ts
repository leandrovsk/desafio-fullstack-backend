import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { isUUID } from "class-validator";
import { Contact } from "../entities/contacts.entity";


const ensureContactIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contactId = req.params.id

    if (!isUUID(contactId)) {
        return res.status(400).json({
            message: "Invalid UUID credentials"
        })
    }

    const findContact = await contactRepository.findOne({
        where: {
            id: contactId
        }
    })

    if (!findContact) {
        return res.status(404).json({
            message: "Contact UUID not found"
        })
    }

    return next()
}

export { ensureContactIdExistsMiddleware }