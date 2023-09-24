import { Joi, validate } from "express-validation";

const registerValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().required().valid('customer', 'admin'),
        address: Joi.string().required(),
        contactNo: Joi.string().required(),
        profileImg: Joi.string().required(),
    })
}

export const verifyRegister = validate(registerValidation,{},{})

const loginValidation = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
}

export const verifyLogin = validate(loginValidation,{},{})