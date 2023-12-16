import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    parent: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Item", itemSchema);
