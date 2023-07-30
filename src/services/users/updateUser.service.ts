import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";


const updateUserService = async (data: TUserRequest, userId: string): Promise<TUserResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({ id: userId })

    if (data.password) {
        const newPassword = await hash(data.password, 10)
        data.password = newPassword
    }

    const newUserData = userRepository.create({
        ...oldUserData,
        ...data
    })

    await userRepository.save(newUserData)

    return userSchemaResponse.parse(newUserData)
}

export { updateUserService }