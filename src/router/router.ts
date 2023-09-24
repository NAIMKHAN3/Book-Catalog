import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import userRouter from "../module/user/user.index";
import categoryRouter from "../module/category/category.index";
import bookRouter from "../module/book/book.index";
import orderRouter from "../module/order/order.index";

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/books', bookRouter);
router.use('/orders', orderRouter);


export default router;