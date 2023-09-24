import { Router } from "express";
import { verifyLogin, verifyRegister } from "./auth.validation";
import { createUser, loginUser } from "./auth.controller";

const router = Router();

router.post('/signup', verifyRegister, createUser);
router.post('/signin', verifyLogin, loginUser);


export default router;