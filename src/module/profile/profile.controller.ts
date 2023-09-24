import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.user;
        const result = await prisma.user.findFirst({
            where: {
                id
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Profile retrieved successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}