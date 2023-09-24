import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

dotenv.config();

export const verifyJwt = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader;

    if (!token) {
        return res.status(403).send({
            success: false,
            statusCode: 403,
            message: "Access Denined"
        })

    };
    try {

        const verified = jwt.verify(token, config.auth_token || "");
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).send({
            success: false,
            statusCode: 403,
            message: `Access denied, invalid token: ${token}`
        })

    }
};