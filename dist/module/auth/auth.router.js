"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_validation_1 = require("./auth.validation");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.post('/signup', auth_validation_1.verifyRegister, auth_controller_1.createUser);
router.post('/signin', auth_validation_1.verifyLogin, auth_controller_1.loginUser);
exports.default = router;
