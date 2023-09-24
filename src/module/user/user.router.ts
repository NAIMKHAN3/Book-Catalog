import { Router } from "express";
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "./user.controller";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyAdmin } from "../../middleware/verifyAdmin";

const router = Router();

router.get('/', verifyJwt, verifyAdmin, getAllUsers);
router.get('/:id', verifyJwt, verifyAdmin, getSingleUser);
router.patch('/:id', verifyJwt, verifyAdmin, updateUser);
router.delete('/:id', verifyJwt, verifyAdmin, deleteUser);

export default router;