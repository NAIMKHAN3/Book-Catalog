import { Router } from "express";
import { getAllUsers, getSingleUser } from "./user.controller";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);

export default router;