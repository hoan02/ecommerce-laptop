import Card from "../models/card.mode.js";
import createError from "../utils/createError.js";

export const getAllCard = async (req, res, next) => {
  try {
    const allCard = await Card.find({});
    res.status(200).send(allCard);
  } catch (err) {
    next(createError(500, "Lấy danh sách Card thất bại!"));
  }
};

export const createCard = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newCard = await Card.create({
      name,
    });
    res.status(201).json({
      success: true,
      message: "Tạo mới Card thành công!",
      Card: newCard,
    });
  } catch (error) {
    next(createError(500, "Tạo mới Card thất bại!"));
  }
};

export const deleteCard = async (req, res, next) => {
  const { idCard } = req.params;
  try {
    await Card.findByIdAndDelete(idCard);
    res.status(201).json({
      success: true,
      message: "Xóa Card thành công!",
    });
  } catch (error) {
    next(createError(500, "Xóa Card thất bại!"));
  }
};
