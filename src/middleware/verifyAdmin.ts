import { NextFunction, Request, Response } from "express";

export const verifyAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { role } = req.user;

        if (role === "admin") {
            return next();
        }
        return res
            .status(400)
            .send({ status: false, message: "You are not a admin" });
    } catch (err) {
        next(err)
    }
};