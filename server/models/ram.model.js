import mongoose from "mongoose";
const { Schema } = mongoose;

const chipSchema = new Schema(
  {
    nameChip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ram", chipSchema);
