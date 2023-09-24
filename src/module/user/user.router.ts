import { Router } from "express";
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "./user.controller";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;