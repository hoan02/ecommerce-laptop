import Memory from "../models/memory.model.js";
import createError from "../utils/createError.js";

export const getAllMemory = async (req, res, next) => {
  try {
    const allMemory = await Memory.find({});
    res.status(200).send(allMemory);
  } catch (err) {
    next(createError(500, "Lấy danh sách Memory thất bại!"));
  }
};

export const createMemory = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newMemory = await Memory.create({
      name,
    });
    res.status(201).json({
      success: true,
      message: "Tạo mới Memory thành công!",
      Memory: newMemory,
    });
  } catch (error) {
    next(createError(500, "Tạo mới Memory thất bại!"));
  }
};

export const deleteMemory = async (req, res, next) => {
  const { idMemory } = req.params;
  try {
    await Memory.findByIdAndDelete(idMemory);
    res.status(201).json({
      success: true,
      message: "Xóa Memory thành công!",
    });
  } catch (error) {
    next(createError(500, "Xóa Memory thất bại!"));
  }
};
