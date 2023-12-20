import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    deviceId: {
      type: String,
      required: false,
    },
    imageFeatured: {
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
      default: 0,
    },
    retailPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    actualPrice: {
      type: Number,
      required: true,
      default: 0,
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
    capacity: {
      type: String,
      required: true,
    },
    card: {
      type: String,
      required: true,
    },
    screen: {
      type: String,
      required: true,
    },
    warranty: {
      id: {
        type: String,
        required: false,
      },
      duration: {
        type: Number,
        default: 12,
        required: true,
      },
      startDate: {
        type: Date,
        required: false,
      },
      endDate: {
        type: Date,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
