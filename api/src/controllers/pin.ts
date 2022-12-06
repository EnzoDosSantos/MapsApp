import type { Request, Response } from "express";
import type { IPin } from "../../types";
import { savePin, getPins } from "./utils/pin"
import { getRecord, saveRecord } from "../utils/redisUtils";
import { handleHttp } from "../utils/errorHttp"

const savePinController = async(req: Request, res: Response) => {
    try {
        const {username, title, description, rating, lat, long} = req.body
        const pin: IPin = {
            username,
            title,
            description,
            rating,
            lat,
            long
        }
        const savedPin = await savePin(pin)
        res.json(savedPin)
    } catch (error) {
        return handleHttp(res, error)
    }
}

const getPinsController = async(_: Request, res: Response) => {
    try {
        const reply = await getRecord<IPin | undefined>("pins")
        if(reply) return res.json(reply)

        const pins = await getPins()
        if(pins.length === 0){
            return res.status(404).json({message: "No hay pines disponibles"})
        }

        await saveRecord("pins", 15, JSON.stringify(pins))
        return res.json(pins)
    } catch (error) {
        handleHttp(res, error)
    }
}


export {savePinController, getPinsController}