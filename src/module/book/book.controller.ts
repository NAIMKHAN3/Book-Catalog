import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.book.create({
            data: req.body,
            include: {
                category: true
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book created successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await prisma.book.findMany({
            include: {
                category: true
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Books fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getBooksByCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId } = req.params;
        const result = await prisma.book.findMany({
            where: {
                categoryId
            },
            include: {
                category: true
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Books with associated category data fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getSingleBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.book.findFirst({
            where: {
                id
            },
            include: {
                category: true
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book fetched successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.book.update({
            where: {
                id
            },
            data: req.body,
            include: {
                category: true
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book updated successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await prisma.book.delete({
            where: {
                id
            },
            include: {
                category: true
            }
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book is deleted successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}