import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.category.create({
            data: req.body
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category created successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getAllCategorys = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.category.findMany({
            include: {
                books: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Categories fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const getSingleCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.category.findFirst({
            where: {
                id
            },
            include:{
                books: true
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.category.update({
            where: {
                id
            },
            data: req.body,
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category updated successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const result = await prisma.category.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category deleted successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}