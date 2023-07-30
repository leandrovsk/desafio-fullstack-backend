import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { isUUID } from "class-validator";


const ensureUserIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)
    const userId = req.params.id

    if (!isUUID(userId)) {
        return res.status(400).json({
            message: "Invalid UUID credentials"
        })
    }

    const findUser = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!findUser) {
        return res.status(404).json({
            message: "User UUID not found"
        })
    }

    return next()
}

export { ensureUserIdExistsMiddleware }