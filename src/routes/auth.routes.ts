import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";


const router = Router();
const authConroller = new AuthController();

router.post('/register', authConroller.register);



export const authRoutes = router;