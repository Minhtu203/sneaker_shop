import Order from "../models/orderModel.js";
import User from "../models/userModel.js";

export const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const allOrders = await Order.find();
      res.status(200).json({ success: true, allOrders });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
  //create order
  createOrder: async (req, res) => {
    try {
      const {
        totalAmount,
        // address,
        items,
        shippingAddress,
        paymentMethod,
        note,
      } = req.body;

      const userId = req.user.id;

      if (!userId)
        return res
          .status(400)
          .json({ success: false, message: "Missing userId" });

      if (!totalAmount || totalAmount < 0)
        return res
          .status(400)
          .json({ success: false, message: "Missing totalAmount" });

      //   if(totalAmount === 0) {
      //     return res.status(400).json({success:false, message: "Choose items"})
      //   //   }

      //   if (!address)
      //     return res
      //       .status(400)
      //       .json({ success: false, message: "Missing address" });

      if (!items || items.length === 0)
        return res
          .status(400)
          .json({ success: false, message: "Items cannot be empty" });

      if (
        !shippingAddress ||
        !shippingAddress.fullName ||
        !shippingAddress.phone ||
        !shippingAddress.address ||
        !shippingAddress.city
      )
        return res
          .status(400)
          .json({ success: false, message: "Missing shippingAddress fields" });

      const newOrder = await Order.create({
        userId,
        totalAmount,
        // address,
        items,
        shippingAddress,
        paymentMethod,
        note,
      });
      res.status(200).json({ success: true, data: newOrder });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
      console.log(11111, error);
    }
  },
};
