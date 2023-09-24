"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("./profile.controller");
const verifyJwt_1 = require("../../middleware/verifyJwt");
const router = (0, express_1.Router)();
router.get('/', verifyJwt_1.verifyJwt, profile_controller_1.getMyProfile);
exports.default = router;
