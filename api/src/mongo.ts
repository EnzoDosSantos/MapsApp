import mongoose from "mongoose";
import { result } from "./utils/loadDotEnv";
result
// dotenv no funciona con es modules, entonces encontre esta "solución"

export default async function createConection(){
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        console.log('Database connected') 
    } catch (error) {   
        console.error(error)
    }
} 