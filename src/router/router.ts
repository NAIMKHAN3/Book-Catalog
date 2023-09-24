import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import userRouter from "../module/user/user.index";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);


export default router;