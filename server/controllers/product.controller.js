import { cloudinary } from "../server.js";
import Product from "../models/product.model.js";
import createError from "../utils/createError.js";

export const getAllProduct = async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).send(products);
};

export const getProductById = async (req, res, next) => {
  const productId = req.productId;
  const Product = await Product.findById(productId);
  res.status(200).send(Product);
};

export const createProduct = async (req, res, next) => {
  const data = req.body;
  const newProduct = {
    name: data.name,
    // productDetail:
    imageFeaturedUrl: data.imageFeaturedUrl,
    quantity: data.quantity,
    purchasePrice: data.purchasePrice,
    retailPrice: data.retailPrice,
    actualPrice: data.actualPrice,
    brand: data.brand,
    chip: data.chip,
    ram: data.ram,
    capacity: data.capacity,
    card: data.card,
  };

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
