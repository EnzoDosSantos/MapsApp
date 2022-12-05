import { redisClient } from "./createRedisConection";


export async function saveRecord(recordName: string, duration: number, record: string): Promise<void>{
    try {
        await redisClient?.set(recordName, record, { EX: duration })
    } catch (error) {
        console.error("Error")
    }
}

export async function getRecord<ResponseType>(recordName: string): Promise<ResponseType | undefined> {
    try {
        const response = await redisClient?.get(recordName)
        if(response){
            return JSON.parse(response)
        }
        console.log("No record found")
    } catch (error) {
        console.log("Error")
    }
}