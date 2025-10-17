import User from "../models/userModel.js";

export const userController = {
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Người dùng không tồn tại.",
          deletedUser: user,
        });
      }
      res.status(200).json({
        success: true,
        message: "Xóa thành công!",
        deletedUser: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Lỗi khi xóa người dùng.",
        error: error.message,
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId).select("-password");
      if (!user) {
        res.status(400).json({
          success: false,
          message: "Người dùng không tồn tại.",
        });
      }
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res.status(400).json({
          success: false,
          message: "ID người dùng không hợp lệ.",
        });
      }

      res.status(500).json({
        success: false,
        message: "Lỗi khi tải người dùng",
        error: error.message,
      });
    }
  },
};
