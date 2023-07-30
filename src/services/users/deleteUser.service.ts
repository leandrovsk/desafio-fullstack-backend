import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors/AppError"


const deleteUserService = async (userId: string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw new AppError("user not found", 404)
    }

    await userRepository.remove(user)
}

export { deleteUserService }