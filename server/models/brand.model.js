import mongoose from "mongoose";
const { Schema } = mongoose;

const brandSchema = new Schema(
  {
    nameBrand: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Brand", brandSchema);
