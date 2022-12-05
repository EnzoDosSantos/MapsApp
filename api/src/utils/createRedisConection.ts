import type { RedisClientType } from 'redis'
import { createClient } from 'redis'
import { result } from "./loadDotEnv";
result

let redisClient: RedisClientType
const devMode = false


async function getConnection(): Promise<RedisClientType> {
    redisClient = createClient({
        socket:{
            host: devMode ? process.env.REDIS_DEV : process.env.REDIS_HOST,
            port: 6379
        }
    });
    
    redisClient.on('error', err => console.log(`Redis Error: ${err}`))
    redisClient.on('connect', () => console.log(`Redis connected ${devMode ? process.env.REDIS_DEV : process.env.REDIS_HOST}:6379`))
    redisClient.on('reconnecting', () => console.log('Redis reconnecting'))
    redisClient.on('ready', () => {
      console.log('Redis ready to use!')
    })
    await redisClient.connect()
    return redisClient
}

getConnection().then(connection => {
  redisClient = connection
}).catch(err => {
  console.log({ err }, 'Failed to connect to Redis')
})

export {
  redisClient
}