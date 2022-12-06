import type { Request, Response } from "express";
import { loginUser, registerUser } from "./utils/user";
import { handleHttp } from "../utils/errorHttp"

const registerUserController = async (req: Request, res: Response) => {
    try {
        const {username, email, password} = req.body
        const token = await registerUser({username, email, password})
        if(token){
            return res.json({ token })
        }
        return res.status(401).json({message: "El usuario ya existe"})
    } catch (error) {
        return handleHttp(res, error)
    }
}

const loginUserController = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body
        const userData = await loginUser(email, password)
        if(userData){
            return res.json({user: userData.user, token: userData.token})
        }
        return res.status(401).json({message: "Correo o contraseña incorrectas"})
    } catch (error) {
        return handleHttp(res, error)
    }
}

export { registerUserController, loginUserController }
