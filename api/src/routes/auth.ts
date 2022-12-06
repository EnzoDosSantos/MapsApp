import { Router } from "express";
import { loginUserController, registerUserController } from "../controllers/user";

const router = Router()

router.post("/login", loginUserController )
router.post("/register", registerUserController )



export {router}