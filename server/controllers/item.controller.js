import Item from "../models/item.model.js";
import createError from "../utils/createError.js";

export const getAllItem = async (req, res, next) => {
  const slug = req.query.slug;
  try {
    const allItem = await Item.find({
      slug,
    });
    if (!allItem) return next(createError(404, "Không tìm thấy bản ghi nào!"));
    res.status(200).send(allItem);
  } catch (err) {
    next(createError(500, "Lấy danh sách thất bại!"));
  }
};

export const createItem = async (req, res, next) => {
  const { name, slug } = req.body;
  try {
    const newItem = await Item.create({
      name,
      slug,
    });
    res.status(201).json({
      success: true,
      message: "Tạo mới thành công!",
      Item: newItem,
    });
  } catch (error) {
    next(createError(500, "Tạo mới thất bại!"));
  }
};

export const deleteItem = async (req, res, next) => {
  const idItem = req.params.id;
  console.log(idItem);
  try {
    await Item.findByIdAndDelete(idItem);
    res.status(201).json({
      success: true,
      message: "Xóa thành công!",
    });
  } catch (error) {
    next(createError(500, "Xóa thất bại!"));
  }
};
