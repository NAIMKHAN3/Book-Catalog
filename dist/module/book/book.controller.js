"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getSingleBook = exports.getBooksByCategory = exports.getAllBooks = exports.createBook = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.book.create({
            data: req.body,
            include: {
                category: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book created successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createBook = createBook;
const getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, size, sortBy, sortOrder, minPrice, maxPrice, category, search } = req.query;
        let skip = (parseInt(page) - 1) || 0;
        const take = (parseInt(size)) || 10;
        const sortField = sortBy || 'title';
        const order = (sortOrder === null || sortOrder === void 0 ? void 0 : sortOrder.toLowerCase()) === 'desc' ? 'desc' : 'asc';
        const minBookPrice = parseInt(minPrice) || 0;
        const maxBookPrice = parseInt(maxPrice) || 999999999;
        const whereCondition = [];
        if (skip < 0) {
            skip = 0;
        }
        if (search) {
            whereCondition.push({
                OR: [
                    { title: { contains: search, mode: 'insensitive' } },
                    { author: { contains: search, mode: 'insensitive' } },
                    { genre: { contains: search, mode: 'insensitive' } },
                ],
            });
        }
        if (category) {
            whereCondition.push({ categoryId: category });
        }
        whereCondition.push({
            price: {
                gte: minBookPrice,
                lte: maxBookPrice
            }
        });
        const result = yield prisma_1.default.book.findMany({
            where: {
                AND: whereCondition
            },
            skip: skip * take,
            take,
            orderBy: {
                [sortField]: order,
            },
            include: {
                category: true
            }
        });
        const total = yield prisma_1.default.book.count();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Books fetched successfully",
            meta: {
                page: skip,
                size: take,
                total,
                totalPage: Math.ceil(total / take)
            },
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllBooks = getAllBooks;
const getBooksByCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const result = yield prisma_1.default.book.findMany({
            where: {
                categoryId
            },
            include: {
                category: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Books with associated category data fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getBooksByCategory = getBooksByCategory;
const getSingleBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.book.findFirst({
            where: {
                id
            },
            include: {
                category: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleBook = getSingleBook;
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.book.update({
            where: {
                id
            },
            data: req.body,
            include: {
                category: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book updated successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.book.delete({
            where: {
                id
            },
            include: {
                category: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book is deleted successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteBook = deleteBook;
