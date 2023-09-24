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
exports.deleteUser = exports.updateUser = exports.getSingleUser = exports.getAllUsers = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma_1.default.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                contactNo: true,
                role: true,
                address: true,
                profileImg: true,
            },
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Users retrieved successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
const getSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.user.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                contactNo: true,
                role: true,
                address: true,
                profileImg: true,
            },
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "User getched successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleUser = getSingleUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.params;
        if ((_a = req.body) === null || _a === void 0 ? void 0 : _a.email) {
            const findUser = yield prisma_1.default.user.findFirst({
                where: {
                    email: req.body.email
                }
            });
            if (findUser && findUser.id !== id) {
                throw new Error('Email Already Exist');
            }
        }
        const result = yield prisma_1.default.user.update({
            where: {
                id
            },
            data: req.body,
            select: {
                id: true,
                name: true,
                email: true,
                contactNo: true,
                role: true,
                address: true,
                profileImg: true,
            },
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "User updated successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield prisma_1.default.user.delete({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                contactNo: true,
                role: true,
                address: true,
                profileImg: true,
            },
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Uers deleted successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
