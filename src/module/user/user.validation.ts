import { Joi, validate } from "express-validation";

const userUpdateValidation = {
    body: Joi.object({
        name: Joi.string().optional(),
        email: Joi.string().email().optional(),
        address: Joi.string().optional(),
        contactNo: Joi.string().optional(),
        profileImg: Joi.string().optional(),
    })
}

export const verifyUpdateUser = validate(userUpdateValidation,{},{})