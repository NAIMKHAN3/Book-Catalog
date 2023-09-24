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
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (req.body?.email) {
            const findUser = await prisma.user.findFirst({
                where: {
                    email: req.body.email
                }
            })
            if (findUser && findUser.id !== id) {
                throw new Error('Email Already Exist')
            }
        }
        const result = await prisma.user.update({
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
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "User updated successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.user.delete({
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
            message: "Uers deleted successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}