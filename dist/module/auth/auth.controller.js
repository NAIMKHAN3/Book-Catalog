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
exports.loginUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const token_utils_1 = require("../../utils/token.utils");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, name, email, contactNo, address, role, profileImg } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = {
            name,
            email,
            password: hashedPassword,
            contactNo,
            role,
            address,
            profileImg,
        };
        const result = yield prisma_1.default.user.create({
            data: user,
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
        const accessToken = (0, token_utils_1.createToken)(result, "ACCESS");
        const refreshToken = (0, token_utils_1.createToken)(result, "REFRESH");
        res.status(200).send({
            success: true,
            message: "User created successfully!",
            data: result,
            token: accessToken,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email } = req.body;
        const result = yield prisma_1.default.user.findFirst({
            where: {
                email
            }
        });
        if (!result) {
            throw new Error('User Not Found');
        }
        const isPasswordCorrect = yield bcrypt_1.default.compare(password, result.password);
        if (!isPasswordCorrect) {
            throw new Error("Password is incorrect");
        }
        const user = yield prisma_1.default.user.findFirst({
            where: {
                email
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
        const accessToken = (0, token_utils_1.createToken)(user, "ACCESS");
        const refreshToken = (0, token_utils_1.createToken)(user, "REFRESH");
        res.status(200).send({
            success: true,
            message: "User signin successfully!",
            data: user,
            token: accessToken
        });
    }
    catch (err) {
        next(err);
    }
});
exports.loginUser = loginUser;
