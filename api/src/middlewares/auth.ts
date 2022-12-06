import type { NextFunction, Response } from "express";
import User from "../models/user";
import { IRequest } from "../../types";
import { getTokenData } from "../utils/jwt";
import { getUser } from "./utils/auth";

const authMiddleware = async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    const autorization = req.get('Authorization')
    if (!autorization) {
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }
    if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }
    const token = autorization!.split(' ')[1]
    const data = getTokenData(token)
    if (!data) {
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }
    console.log({data})
    req.user = data
    next()
    // const user = await User.findById(data.id)
    // if (!user) {
    //     return res.status(404).json({ message: 'El usuario no existe' })
    // }
  } catch (e) {
    return res.status(401).json({error: "No estas autorizado"})
  }
};

export { authMiddleware };