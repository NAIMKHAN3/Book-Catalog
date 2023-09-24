"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const verifyAdmin_1 = require("../../middleware/verifyAdmin");
const router = (0, express_1.Router)();
router.post('/create-book', verifyJwt_1.verifyJwt, verifyAdmin_1.verifyAdmin, book_validation_1.verifyBookValidation, book_controller_1.createBook);
router.get('/', book_controller_1.getAllBooks);
router.get('/:categoryId/category', book_controller_1.getBooksByCategory);
router.get('/:id', book_controller_1.getSingleBook);
router.patch('/:id', verifyJwt_1.verifyJwt, verifyAdmin_1.verifyAdmin, book_validation_1.verifyBookUpdateValidation, book_controller_1.updateBook);
router.delete('/:id', verifyJwt_1.verifyJwt, verifyAdmin_1.verifyAdmin, book_controller_1.deleteBook);
exports.default = router;
