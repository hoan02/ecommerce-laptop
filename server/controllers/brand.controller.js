import Brand from "../models/brand.model.js";
import createError from "../utils/createError.js";

export const getAllBrand = async (req, res, next) => {
  try {
    const allBrand = await Brand.find({});
    res.status(200).send(allBrand);
  } catch (err) {
    next(createError(500, "Lấy danh sách thương hiệu thất bại!"));
  }
};

export const createBrand = async (req, res, next) => {
  const { name } = req.body;
  try {
    const newBrand = await Brand.create({
      name,
    });
    res.status(201).json({
      success: true,
      message: "Tạo mới thương hiệu thành công!",
      Brand: newBrand,
    });
  } catch (error) {
    next(createError(500, "Tạo mới thương hiệu thất bại!"));
  }
};

export const deleteBrand = async (req, res, next) => {
  const { idBrand } = req.params;
  try {
    await Brand.findByIdAndDelete(idBrand);
    res.status(201).json({
      success: true,
      message: "Xóa thương hiệu thành công!",
    });
  } catch (error) {
    next(createError(500, "Xóa thương hiệu thất bại!"));
  }
};
