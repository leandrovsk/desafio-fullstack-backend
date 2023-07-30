import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";
import { contactsSchemaResponse } from "../../schemas/contacts.schemas";


const listContactsService = async (userId: string): Promise<TContactsResponse> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError("user not found", 404)
    }

    const contacts = await contactRepository.find({
        where: {
            user: user
        }
    })

    return contactsSchemaResponse.parse(contacts)

}

export { listContactsService }