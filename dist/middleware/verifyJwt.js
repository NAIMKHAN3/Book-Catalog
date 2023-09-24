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
exports.verifyJwt = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
dotenv_1.default.config();
const verifyJwt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers["authorization"];
    const token = authHeader;
    if (!token) {
        return res.status(403).send({
            success: false,
            statusCode: 403,
            message: "Access Denined"
        });
    }
    ;
    try {
        const verified = jsonwebtoken_1.default.verify(token, config_1.default.auth_token || "");
        req.user = verified;
        next();
    }
    catch (error) {
        res.status(403).send({
            success: false,
            statusCode: 403,
            message: `Access denied, invalid token: ${token}`
        });
    }
});
exports.verifyJwt = verifyJwt;
