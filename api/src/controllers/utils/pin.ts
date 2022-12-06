import Pin from "../../models/pins"
import type { IPin } from "../../../types"

const savePin = async (pin: IPin): Promise<IPin> => {    
    const savedPin = new Pin(pin)
    const responsePin = await savedPin.save()
    return responsePin
}

const getPins = async (): Promise<IPin[] | []> => {
    const pins = await Pin.find({})
    if(!pins.length){
        return []
    }
    return pins
}

export {savePin, getPins}