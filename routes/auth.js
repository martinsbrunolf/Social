import express from "express";
import { 
    login, 
    register, 
    logout 
} from "../controllers/auth.js";


const router = express.Router();

router.post("/auth/login", login)
router.post("/auth/register", register)
router.post("/auth/logout", logout)

export default router