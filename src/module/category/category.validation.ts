import { Joi, validate } from "express-validation";

const categoryValidation = {
    body: Joi.object({
        title: Joi.string().required()
    })
}

export const verifyCategory = validate(categoryValidation,{},{})