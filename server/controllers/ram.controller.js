import Ram from "../models/ram.model.js";
import createError from "../utils/createError.js";

export const getAllRam = async (req, res, next) => {
  try {
    const allRam = await Ram.find({});
    res.status(200).send(allRam);
  } catch (err) {
    next(createError(500, "Lấy danh sách Ram thất bại!"));
  }
};

export const createRam = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newRam = await Ram.create({
      name,
    });
    res.status(201).json({
      success: true,
      message: "Tạo mới Ram thành công!",
      Ram: newRam,
    });
  } catch (error) {
    next(createError(500, "Tạo mới Ram thất bại!"));
  }
};

export const deleteRam = async (req, res, next) => {
  const { idRam } = req.params;
  try {
    await Ram.findByIdAndDelete(idRam);
    res.status(201).json({
      success: true,
      message: "Xóa Ram thành công!",
    });
  } catch (error) {
    next(createError(500, "Xóa Ram thất bại!"));
  }
};
