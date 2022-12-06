import { Router } from "express";
import { getPinsController, savePinController } from "../controllers/pin";
import { authMiddleware } from "../middlewares/auth";

const router = Router()

router.get("/", authMiddleware, getPinsController)
router.post("/", authMiddleware, savePinController)



export {router}