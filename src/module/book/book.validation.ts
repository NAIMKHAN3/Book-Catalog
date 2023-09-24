import { Joi, validate } from "express-validation";

const createBookValidation = {
    body: Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        price: Joi.number().required(),
        genre: Joi.string().required(),
        publicationDate: Joi.string().required(),
        categoryId: Joi.string().pattern(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/).required()
    })
}

export const verifyBookValidation = validate(createBookValidation,{},{})
const updateBookValidation = {
    body: Joi.object({
        title: Joi.string().optional(),
        author: Joi.string().optional(),
        price: Joi.number().optional(),
        genre: Joi.string().optional()
    })
}

export const verifyBookUpdateValidation = validate(updateBookValidation,{},{})