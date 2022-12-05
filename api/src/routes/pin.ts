import { Router } from "express";
import { getPinsController, savePinController } from "../controllers/pin";

const router = Router()

router.get("/", getPinsController)
router.post("/", savePinController)



export {router}