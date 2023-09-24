import { NextFunction, Request, Response } from "express";
import prisma from "../../utils/prisma";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.userId = req.user.id;
        const result = await prisma.order.create({
            data: req.body
        })
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Order created successfully",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { role, id } = req.user;
        if (role === 'admin') {
            const result = await prisma.order.findMany({
            })
            return res.status(200).send({
                success: true,
                statusCode: 200,
                message: "Orders retrieved successfully",
                data: result
            })
        } else {
            const result = await prisma.order.findMany({
                where: {
                    userId: id
                }
            })
            return res.status(200).send({
                success: true,
                statusCode: 200,
                message: "Orders retrieved successfully",
                data: result
            })
        }

    }
    catch (err) {
        next(err)
    }
}
export const getSingleOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { role, id } = req.user;
        const { orderId } = req.params;
        const result = await prisma.order.findFirst({
            where: {
                id: orderId
            }
        })
        if (role === 'admin') {
            
            return res.status(200).send({
                success: true,
                statusCode: 200,
                message: "Order fetched successfully",
                data: result
            })
        } else {
            if(result && result.userId === id){
                return res.status(200).send({
                    success: true,
                    statusCode: 200,
                    message: "Orders fetched successfully",
                    data: result
                })
            }
            
            return res.status(401).send({
                success: false,
                statusCode: 401,
                message: "Unauthorized Access",
            })
        }

    }
    catch (err) {
        next(err)
    }
}