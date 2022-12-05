import express, { Application } from "express";
import createConection from "./mongo";
import { router } from "./routes"
import { result } from "./utils/loadDotEnv";
result

const app: Application = express()

app.use(express.json())
app.use(router)
createConection()
app.listen(process.env.PORT!, async() => {
    console.log(`App listen on port: ${process.env.PORT!}`)
})