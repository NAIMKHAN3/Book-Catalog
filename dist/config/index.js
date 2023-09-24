"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    auth_token: process.env.AUTH_TOKEN,
    auth_token_expires_in: process.env.AUTH_TOKEN_EXPIRES_IN,
    refresh_token: process.env.REFRESH_TOKEN,
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN
};
