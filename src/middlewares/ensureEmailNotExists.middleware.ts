import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";


const ensureEmailNotExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)

    const userEmail = req.body.email

    if (userEmail) {
        const user = await userRepository.findOneBy({ email: userEmail })

        if (user) {
            return res.status(409).json({
                message: "Email already exists"
            })
        }
    }

    return next()
}

export { ensureEmailNotExistsMiddleware }