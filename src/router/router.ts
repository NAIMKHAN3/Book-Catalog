import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import userRouter from "../module/user/user.index";
import categoryRouter from "../module/category/category.index";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);


export default router;