import { hash, compare } from "bcrypt";

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 10)
  return passwordHash
}

const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash)
  if(isCorrect){
    return isCorrect
  }
  return false
}

export { encrypt, verified }