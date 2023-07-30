import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contacts.entity";

const ensureUserIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contactId = req.params.id
    const userId = res.locals.userId

    const contact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        })
    }

    if (contact?.user.id !== userId) {
        return res.status(403).json({
            message: "Insufficient permissions"
        })
    }

    return next()
}

export { ensureUserIsOwnerMiddleware }