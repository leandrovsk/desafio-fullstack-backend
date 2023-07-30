import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const ensureUserMatches = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id
    const userTokenId = res.locals.userId

    if (userId !== userTokenId) {
        throw new AppError("Insufficient permissions", 403)
    }

    return next()
}

export { ensureUserMatches }