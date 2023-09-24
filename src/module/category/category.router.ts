import { Router } from "express";
import { verifyCategory } from "./category.validation";
import { createCategory, deleteCategory, getAllCategorys, getSingleCategory, updateCategory } from "./category.controller";

const router = Router();

router.post('/create-category', verifyCategory, createCategory);
router.get('/', getAllCategorys);
router.get('/:id', getSingleCategory);
router.patch('/:id', verifyCategory, updateCategory);
router.delete('/:id',  deleteCategory);


export default router;