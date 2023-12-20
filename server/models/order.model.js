import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    userInfo: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    note: {
      type: String,
      required: false,
    },
    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantityBuy: {
          type: Number,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      enum: ["pending", "shiping", "done"],
      default: "pending",
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", itemSchema);
