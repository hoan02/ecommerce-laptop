import Chip from "../models/chip.model.js";
import createError from "../utils/createError.js";

export const getAllChip = async (req, res, next) => {
  try {
    const allChip = await Chip.find({});
    res.status(200).send(allChip);
  } catch (err) {
    next(createError(500, "Lấy danh sách chip thất bại!"));
  }
};

export const createChip = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newChip = await Chip.create({
      name,
    });
    res.status(201).json({
      success: true,
      message: "Tạo mới chip thành công!",
      Chip: newChip,
    });
  } catch (error) {
    next(createError(500, "Tạo mới chip thất bại!"));
  }
};

export const deleteChip = async (req, res, next) => {
  const { idChip } = req.params;
  try {
    await Chip.findByIdAndDelete(idChip);
    res.status(201).json({
      success: true,
      message: "Xóa chip thành công!",
    });
  } catch (error) {
    next(createError(500, "Xóa chip thất bại!"));
  }
};
