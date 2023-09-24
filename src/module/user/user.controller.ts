import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, name, email, contactNo, address, role, profileImg } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {

        }
    }
    catch (err) {
        next(err)
    }
}