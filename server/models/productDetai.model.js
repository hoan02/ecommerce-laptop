import mongoose from "mongoose";
const { Schema } = mongoose;

const productDetailSchema = new Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },
    sellStatus: {
      type: Boolean,
      default: false,
    },
    images: [
      {
        type: Schema.Types.ObjectId,
        ref: "Image",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ProductDetail", productDetailSchema);
