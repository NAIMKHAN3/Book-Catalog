import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                contactNo: true,
                role: true,
                address: true,
                profileImg: true,
            },
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Users retrieved successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.user.findFirst({
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
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "User getched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}