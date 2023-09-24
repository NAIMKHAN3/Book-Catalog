import { Router } from "express";
import { verifyCategory } from "./category.validation";
import { createCategory, deleteCategory, getAllCategorys, getSingleCategory, updateCategory } from "./category.controller";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyAdmin } from "../../middleware/verifyAdmin";

const router = Router();

router.post('/create-category', verifyJwt, verifyAdmin, verifyCategory, createCategory);
router.get('/', getAllCategorys);
router.get('/:id', getSingleCategory);
router.patch('/:id', verifyJwt, verifyAdmin, verifyCategory, updateCategory);
router.delete('/:id', verifyJwt, verifyAdmin, deleteCategory);


export default router;