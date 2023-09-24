import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { createOrder, getAllOrders, getSingleOrder } from "./order.controller";
import { verifyOrder } from "./order.validation";

const router = Router();

router.post('/create-order', verifyOrder, verifyJwt, createOrder)
router.get('/', verifyJwt,  getAllOrders)
router.get('/:orderId', verifyJwt,  getSingleOrder)

export default router;