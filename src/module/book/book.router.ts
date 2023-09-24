import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBooksByCategory, getSingleBook, updateBook } from "./book.controller";
import { verifyBookUpdateValidation, verifyBookValidation } from "./book.validation";

const router = Router();

router.post('/create-book', verifyBookValidation, createBook)
router.get('/', getAllBooks)
router.get('/:categoryId/category', getBooksByCategory)
router.get('/:id', getSingleBook)
router.patch('/:id', verifyBookUpdateValidation, updateBook)
router.delete('/:id', deleteBook)

export default router;