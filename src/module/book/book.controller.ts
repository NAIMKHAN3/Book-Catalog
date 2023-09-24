import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";
import { Prisma } from "@prisma/client";

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
        const { page, size, sortBy, sortOrder, minPrice, maxPrice, category, search } = req.query;
        let skip = (parseInt(page as string) - 1) || 0;
        const take = (parseInt(size as string)) || 10;
        const sortField = sortBy as keyof Prisma.BookWhereInput || 'title';
        const order = (sortOrder as string)?.toLowerCase() === 'desc' ? 'desc' : 'asc';
        const minBookPrice = parseInt(minPrice as string) || 0;
        const maxBookPrice = parseInt(maxPrice as string) || 999999999;
        const whereCondition: Prisma.BookWhereInput[] = []
        if (skip < 0) {
            skip = 0
        }
        if (search) {
            whereCondition.push({
                OR: [
                    { title: { contains: search as string, mode: 'insensitive' } },
                    { author: { contains: search as string, mode: 'insensitive' } },
                    { genre: { contains: search as string, mode: 'insensitive' } },
                ],
            });
        }
        if (category) {
            whereCondition.push({ categoryId: category as string });
        }
        whereCondition.push({
            price: {
                gte: minBookPrice,
                lte: maxBookPrice
            }
        })
        const result = await prisma.book.findMany({
            where: {
                AND: whereCondition
            },
            skip: skip * take,
            take,
            orderBy: {
                [sortField]: order,
            },
            include: {
                category: true
            }
        })
        const total = await prisma.book.count();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Books fetched successfully",
            meta: {
                page: skip,
                size: take,
                total,
                totalPage: Math.ceil(total / take)
            },
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