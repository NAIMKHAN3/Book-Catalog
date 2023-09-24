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
exports.deleteCategory = exports.updateCategory = exports.getSingleCategory = exports.getAllCategorys = exports.createCategory = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.category.create({
            data: req.body
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category created successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createCategory = createCategory;
const getAllCategorys = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.category.findMany({
            include: {
                books: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Categories fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllCategorys = getAllCategorys;
const getSingleCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.category.findFirst({
            where: {
                id
            },
            include: {
                books: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category fetched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleCategory = getSingleCategory;
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.category.update({
            where: {
                id
            },
            data: req.body,
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category updated successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.category.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category deleted successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteCategory = deleteCategory;
