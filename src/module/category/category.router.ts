import { Router } from "express";
import { verifyCategory } from "./category.validation";
import { createCategory, getAllCategorys, getSingleCategory } from "./category.controller";

const router = Router();

router.post('/create-category', verifyCategory, createCategory);
router.get('/', getAllCategorys);
router.get('/:id', getSingleCategory);


export default router;