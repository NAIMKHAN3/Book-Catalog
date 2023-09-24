"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = void 0;
const verifyAdmin = (req, res, next) => {
    try {
        const { role } = req.user;
        if (role === "admin") {
            return next();
        }
        return res
            .status(400)
            .send({ status: false, message: "You are not a admin" });
    }
    catch (err) {
        next(err);
    }
};
exports.verifyAdmin = verifyAdmin;
