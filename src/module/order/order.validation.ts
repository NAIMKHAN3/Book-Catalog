import { Joi, validate } from "express-validation";

const orderValidation = {
    body: Joi.object({
        orderedBooks: Joi.array().items(
          Joi.object({
            bookId: Joi.string().required(),
            quantity: Joi.number().integer().min(1).required()
          })
        ).required()
      })
}

export const verifyOrder = validate(orderValidation,{},{})