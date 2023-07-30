import AppDataSource from "../../data-source"
import { Contact } from "../../entities/contacts.entity"
import { AppError } from "../../errors/AppError"


const deleteContactsService = async (contactId: string): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({ id: contactId })

    if (!contact) {
        throw new AppError("contact not found", 404)
    }

    await contactRepository.remove(contact)
}

export { deleteContactsService }