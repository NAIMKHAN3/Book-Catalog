import { Router } from "express";
import authRouter from "../module/auth/auth.index";

const router = Router();

router.use('/auth', authRouter);


export default router;