import { Router } from "express";
import { getMyProfile } from "./profile.controller";
import { verifyJwt } from "../../middleware/verifyJwt";

const router = Router();

router.get('/', verifyJwt, getMyProfile)

export default router;