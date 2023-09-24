import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import prisma from "../../utils/prisma";
import { createToken } from "../../utils/token.utils";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, name, email, contactNo, address, role, profileImg } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            name,
            email,
            password: hashedPassword,
            contactNo,
            role,
            address,
            profileImg,
        }
        const result = await prisma.user.create({
            data: user,
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

        const accessToken = createToken(result, "ACCESS");
        const refreshToken = createToken(result, "REFRESH");

        res.status(200).send({
            success: true,
            message: "User created successfully!",
            data: result,
            token: accessToken,
        })
    }
    catch (err) {
        next(err)
    }
}
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, email } = req.body;

        const result = await prisma.user.findFirst({
            where: {
                email
            }
        })
        if (!result) {
            throw new Error('User Not Found')
        }
        const isPasswordCorrect = await bcrypt.compare(password, result.password);
        if (!isPasswordCorrect) {
            throw new Error("Password is incorrect")
        }

        const user = await prisma.user.findFirst({
            where: {
                email
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
        const accessToken = createToken(user, "ACCESS");
        const refreshToken = createToken(user, "REFRESH");
        res.status(200).send({
            success: true,
            message: "User signin successfully!",
            data: user,
            token:accessToken
        })
    }
    catch (err) {
        next(err)
    }
}