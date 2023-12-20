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
    const productId = req.params.id;
    const product = await Product.findById(productId).populate("imageFeatured");
    res.status(200).send(product);
  } catch (error) {
    next(createError(500, "Tìm kiếm sản phẩm không thành công!"));
  }
};

export const createProduct = async (req, res, next) => {
  const data = req.body;
  const newProduct = {
    title: data.title,
    name: data.name,
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
    warranty: {
      duration: data.warrantyDuration,
    },
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

export const updateProduct = async (req, res, next) => {
  const productId = req.params.id;
  const updatedProductData = req.body;

  try {
    // Kiểm tra xem sản phẩm cần cập nhật có tồn tại hay không
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Sản phẩm không tồn tại",
      });
    }

    // Cập nhật thông tin sản phẩm
    existingProduct.title = updatedProductData.title || existingProduct.title;
    existingProduct.name = updatedProductData.name || existingProduct.name;
    existingProduct.imageFeatured =
      updatedProductData.imageFeatured || existingProduct.imageFeatured;
    existingProduct.quantity =
      updatedProductData.quantity || existingProduct.quantity;
    existingProduct.purchasePrice =
      updatedProductData.purchasePrice || existingProduct.purchasePrice;
    existingProduct.retailPrice =
      updatedProductData.retailPrice || existingProduct.retailPrice;
    existingProduct.actualPrice =
      updatedProductData.actualPrice || existingProduct.actualPrice;
    existingProduct.brand = updatedProductData.brand || existingProduct.brand;
    existingProduct.chip = updatedProductData.chip || existingProduct.chip;
    existingProduct.ram = updatedProductData.ram || existingProduct.ram;
    existingProduct.capacity =
      updatedProductData.capacity || existingProduct.capacity;
    existingProduct.card = updatedProductData.card || existingProduct.card;
    existingProduct.screen =
      updatedProductData.screen || existingProduct.screen;

    existingProduct.warranty.duration =
      updatedProductData.warranty.duration || existingProduct.warranty.duration;

    console.log(existingProduct);
    await existingProduct.save();

    res.status(200).json({
      success: true,
      message: "Cập nhật sản phẩm thành công",
      product: existingProduct,
    });
  } catch (error) {
    next(createError(500, "Cập nhật sản phẩm thất bại"));
  }
};

export const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
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
