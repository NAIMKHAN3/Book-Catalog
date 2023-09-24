"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLogin = exports.verifyRegister = void 0;
const express_validation_1 = require("express-validation");
const registerValidation = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().required(),
        email: express_validation_1.Joi.string().email().required(),
        password: express_validation_1.Joi.string().required(),
        role: express_validation_1.Joi.string().required().valid('customer', 'admin'),
        address: express_validation_1.Joi.string().required(),
        contactNo: express_validation_1.Joi.string().required(),
        profileImg: express_validation_1.Joi.string().required(),
    })
};
exports.verifyRegister = (0, express_validation_1.validate)(registerValidation, {}, {});
const loginValidation = {
    body: express_validation_1.Joi.object({
        email: express_validation_1.Joi.string().email().required(),
        password: express_validation_1.Joi.string().required(),
    })
};
exports.verifyLogin = (0, express_validation_1.validate)(loginValidation, {}, {});
