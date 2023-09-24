"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUpdateUser = void 0;
const express_validation_1 = require("express-validation");
const userUpdateValidation = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().optional(),
        email: express_validation_1.Joi.string().email().optional(),
        address: express_validation_1.Joi.string().optional(),
        contactNo: express_validation_1.Joi.string().optional(),
        profileImg: express_validation_1.Joi.string().optional(),
    })
};
exports.verifyUpdateUser = (0, express_validation_1.validate)(userUpdateValidation, {}, {});
