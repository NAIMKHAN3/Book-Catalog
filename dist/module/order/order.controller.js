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
exports.getSingleOrder = exports.getAllOrders = exports.createOrder = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.userId = req.user.id;
        const result = yield prisma_1.default.order.create({
            data: req.body
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Order created successfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.createOrder = createOrder;
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role, id } = req.user;
        if (role === 'admin') {
            const result = yield prisma_1.default.order.findMany({});
            return res.status(200).send({
                success: true,
                statusCode: 200,
                message: "Orders retrieved successfully",
                data: result
            });
        }
        else {
            const result = yield prisma_1.default.order.findMany({
                where: {
                    userId: id
                }
            });
            return res.status(200).send({
                success: true,
                statusCode: 200,
                message: "Orders retrieved successfully",
                data: result
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getAllOrders = getAllOrders;
const getSingleOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role, id } = req.user;
        const { orderId } = req.params;
        const result = yield prisma_1.default.order.findFirst({
            where: {
                id: orderId
            }
        });
        if (role === 'admin') {
            return res.status(200).send({
                success: true,
                statusCode: 200,
                message: "Order fetched successfully",
                data: result
            });
        }
        else {
            if (result && result.userId === id) {
                return res.status(200).send({
                    success: true,
                    statusCode: 200,
                    message: "Orders fetched successfully",
                    data: result
                });
            }
            return res.status(401).send({
                success: false,
                statusCode: 401,
                message: "Unauthorized Access",
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleOrder = getSingleOrder;
