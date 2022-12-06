import type { IUser } from "../../../types"
import User from "../../models/user"

const getUser = async (id: string): Promise<IUser | null> => {
    const user = await User.findById(id)
    if(!user){
        return null
    }
    return user
}

export {getUser}