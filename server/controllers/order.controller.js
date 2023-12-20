import Order from "../models/order.model.js";
import createError from "../utils/createError.js";

export const getAllOrder = async (req, res, next) => {
  try {
    const allItem = await Order.find({});
    if (!allItem) return next(createError(404, "Không tìm thấy bản ghi nào!"));
    res.status(200).send(allItem);
  } catch (err) {
    next(createError(500, "Lấy danh sách thất bại!"));
  }
};

export const getOrderById = async (req, res, next) => {
  const { orderId } = req.body;
  try {
    const allItem = await Order.findById(orderId);
    if (!allItem) return next(createError(404, "Không tìm thấy bản ghi nào!"));
    res.status(200).send(allItem);
  } catch (err) {
    next(createError(500, "Lấy danh sách thất bại!"));
  }
};

export const createOrder = async (req, res, next) => {
  const data = req.body;
  try {
    const newOrder = await Order.create(data);
    res.status(201).json({
      success: true,
      message: "Gửi đơn hàng thành công!",
      order: newOrder,
    });
  } catch (error) {
    next(createError(500, "Tạo mới thất bại!"));
  }
};
