import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBooksByCategory, getSingleBook, updateBook } from "./book.controller";
import { verifyBookUpdateValidation, verifyBookValidation } from "./book.validation";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyAdmin } from "../../middleware/verifyAdmin";

const router = Router();

router.post('/create-book', verifyJwt, verifyAdmin, verifyBookValidation, createBook)
router.get('/', getAllBooks)
router.get('/:categoryId/category', getBooksByCategory)
router.get('/:id', getSingleBook)
router.patch('/:id', verifyJwt, verifyAdmin, verifyBookUpdateValidation, updateBook)
router.delete('/:id', verifyJwt, verifyAdmin, deleteBook)

export default router;