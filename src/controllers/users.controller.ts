import { Request, Response } from "express"
import { createUserService } from "../services/users/createUser.service"
import { listUserService } from "../services/users/listUser.service"
import { updateUserService } from "../services/users/updateUser.service"
import { deleteUserService } from "../services/users/deleteUser.service"

const createUserController = async (req: Request, res: Response) => {

    const newUser = await createUserService(req.body)

    return res.status(201).json(newUser)
}

const listUserController = async (req: Request, res: Response) => {

    const userId = res.locals.userId
    const user = await listUserService(userId)

    return res.json(user)
}

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    const updatedUser = await updateUserService(req.body, req.params.id)

    return res.json(updatedUser)
}

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    await deleteUserService(req.params.id)

    return res.status(204).json()
}

export { createUserController, listUserController, updateUserController, deleteUserController }