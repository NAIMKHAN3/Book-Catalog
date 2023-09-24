"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOrder = void 0;
const express_validation_1 = require("express-validation");
const orderValidation = {
    body: express_validation_1.Joi.object({
        orderedBooks: express_validation_1.Joi.array().items(express_validation_1.Joi.object({
            bookId: express_validation_1.Joi.string().required(),
            quantity: express_validation_1.Joi.number().integer().min(1).required()
        })).required()
    })
};
exports.verifyOrder = (0, express_validation_1.validate)(orderValidation, {}, {});
