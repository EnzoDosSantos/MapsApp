import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET!

const createToken = (payload: string) => {
    const token = sign({id: payload}, JWT_SECRET, { expiresIn: '365d' })
    return token
}

const getTokenData = (token: string) => {
    const isOk = verify(token, JWT_SECRET);
    console.log(isOk)
    return isOk
}


export {createToken, getTokenData}
