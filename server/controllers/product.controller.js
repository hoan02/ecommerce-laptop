import { cloudinary } from "../server.js";
import Product from "../models/product.model.js";
import createError from "../utils/createError.js";

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find({}).populate("imageFeatured");
    res.status(200).send(products);
  } catch (err) {
    next(createError(500, "Tìm kiếm tất cả sản phẩm không thành công!"));
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const productId = req.productId;
    const Product = await Product.findById(productId).populate("imageFeatured");
    res.status(200).send(Product);
  } catch (error) {
    next(createError(500, "Tìm kiếm sản phẩm không thành công!"));
  }
};

export const createProduct = async (req, res, next) => {
  const data = req.body;
  const newProduct = {
    title: data.title,
    name: data.name,
    // productDetail:
    imageFeatured: data.imageFeatured,
    quantity: data.quantity,
    purchasePrice: data.purchasePrice,
    retailPrice: data.retailPrice,
    actualPrice: data.actualPrice,
    brand: data.brand,
    chip: data.chip,
    ram: data.ram,
    capacity: data.capacity,
    card: data.card,
    screen: data.screen,
  };
  console.log(newProduct);

  try {
    await Product.create(newProduct);
    res.status(201).json({
      success: true,
      message: "Tạo sản phẩm mới thành công!",
      Product: newProduct,
    });
  } catch (error) {
    next(createError(500, "Tạo sản phẩm mới thất bại!"));
  }
};

export const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  console.log(productId);
  try {
    await Product.findByIdAndDelete(productId);
    res.status(201).json({
      success: true,
      message: "Xóa thành công!",
    });
  } catch (error) {
    next(createError(500, "Xóa thất bại!"));
  }
};
