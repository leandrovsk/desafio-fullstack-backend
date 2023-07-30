import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schemas";

const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
    const { email, name, password, phone } = data
    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        phone
    })

    await userRepository.save(user)

    return userSchemaResponse.parse(user)
}

export { createUserService }