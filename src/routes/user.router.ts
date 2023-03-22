import { Router } from "express";
import UserController from "../controllers/user.controller";
const router = Router();

router.get("/", UserController.many);
router.get("/:id", UserController.one);

export default router;
