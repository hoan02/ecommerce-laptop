import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productDetail: {
      type: Schema.Types.ObjectId,
      ref: "ProductDetail",
      required: false,
    },
    imageFeaturedUrl: {
      type: Schema.Types.ObjectId,
      ref: "Image",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    retailPrice: {
      type: Number,
      required: true,
    },
    actualPrice: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    chip: {
      type: String,
      required: true,
    },
    ram: {
      type: String,
      required: true,
    },
    memory: {
      type: String,
      required: true,
    },
    card: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
