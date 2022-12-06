import User from "../../models/user";
import { createToken } from "../../utils/jwt"
import { encrypt, verified } from "../../utils/bcrypt";
import type { IUser, IUserResponse } from "../../../types";

const registerUser = async ({email, password, username} : IUser): Promise<string | null> => {
    const searchUser = await User.findOne({email})
    if(searchUser){
        return null
    }
    const hashPassword = await encrypt(password)
    const user = {
        email,
        username,
        password: hashPassword
    }
    const savedUser = new User(user)
    const responseUser = await savedUser.save()
    const token = createToken(responseUser.id)
    return token
}

const loginUser = async (email: string, password: string): Promise<IUserResponse | null> => {
    const userSearch = await User.findOne({email})
    if(userSearch){
        const validPassword = await verified(password, userSearch.password)
        if(validPassword){
            const token = createToken(userSearch.id)
            const userToSend = {
                username: userSearch.username,
                email: userSearch.email
            }
            const response: IUserResponse = {
                user: userToSend,
                token
            }
            return response
        }
        return null
    }
    return null
}

export { registerUser, loginUser }