"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBookUpdateValidation = exports.verifyBookValidation = void 0;
const express_validation_1 = require("express-validation");
const createBookValidation = {
    body: express_validation_1.Joi.object({
        title: express_validation_1.Joi.string().required(),
        author: express_validation_1.Joi.string().required(),
        price: express_validation_1.Joi.number().required(),
        genre: express_validation_1.Joi.string().required(),
        publicationDate: express_validation_1.Joi.string().required(),
        categoryId: express_validation_1.Joi.string().pattern(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/).required()
    })
};
exports.verifyBookValidation = (0, express_validation_1.validate)(createBookValidation, {}, {});
const updateBookValidation = {
    body: express_validation_1.Joi.object({
        title: express_validation_1.Joi.string().optional(),
        author: express_validation_1.Joi.string().optional(),
        price: express_validation_1.Joi.number().optional(),
        genre: express_validation_1.Joi.string().optional()
    })
};
exports.verifyBookUpdateValidation = (0, express_validation_1.validate)(updateBookValidation, {}, {});
