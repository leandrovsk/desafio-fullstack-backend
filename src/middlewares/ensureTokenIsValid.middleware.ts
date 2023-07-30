import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const ensureTokenIsValidMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: "Invalid accessToken" })
    }

    const splittedToken = token.split(" ")[1]

    jwt.verify(splittedToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            return res.status(401).json({ message: "Invalid accessToken" })
        }
        res.locals.userId = decoded.sub
    })

    return next()

}

export { ensureTokenIsValidMiddleware }