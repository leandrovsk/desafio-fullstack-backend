import { Request, Response } from "express";
import { createTokenService } from "../services/login/createToken.service";

const createTokenController = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const accessToken = await createTokenService({ email, password })

    return res.json({ accessToken })
}

export { createTokenController }