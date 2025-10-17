import { Router } from "express";
import { userController } from "../controllers/userController.js";

const router = Router();

router.delete("/:id", userController.deleteUser); // delete user

router.get("/:id", userController.getUser);

export default router;
