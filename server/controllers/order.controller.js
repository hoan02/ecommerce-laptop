import Order from "../models/order.model.js";
import createError from "../utils/createError.js";

export const getAllOrder = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate("cart.product");
    if (!orders) return next(createError(404, "Không tìm thấy bản ghi nào!"));
    res.status(200).send(orders);
  } catch (err) {
    next(createError(500, "Lấy danh sách thất bại!"));
  }
};

export const getOrderById = async (req, res, next) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findById(orderId).populate({
      path: "cart.product",
      populate: {
        path: "imageFeatured",
        model: "Image",
      },
    });
    if (!order) return next(createError(404, "Không tìm thấy bản ghi nào!"));
    res.status(200).send(order);
  } catch (err) {
    next(createError(500, "Lấy danh sách thất bại!"));
  }
};

export const createOrder = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  try {
    const newOrder = await Order.create(data);
    res.status(201).json({
      success: true,
      message: "Gửi đơn hàng thành công!",
      order: newOrder,
    });
  } catch (error) {
    next(
      createError(500, "Tạo đơn hàng thất bại! Hãy điền đủ thông tin mục 1")
    );
  }
};
