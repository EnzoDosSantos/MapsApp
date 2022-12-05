import Pin from "../../models/pins"
import type { IPin } from "../../../types"

const savePin = async (pin: IPin) => {    
    const savedPin = new Pin(pin)
    const responsePin = await savedPin.save()
    return responsePin
}

const getPins = async () => {
    const pins = await Pin.find({})
    return pins
}

export {savePin, getPins}