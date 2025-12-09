import { Router } from "express";
import { middlewareController } from "../middleware/auth.js";
import { orderController } from "../controllers/orderController.js";

const router = Router();

// get all orders
router.get(
  "/getAllOrders",
  middlewareController.verifyAdminToken,
  orderController.getAllOrders
);

//create order
router.post(
  "/createOrder",
  middlewareController.verifyAdminToken,
  orderController.createOrder
);

export default router;
