import mongoose from "mongoose";
const { Schema } = mongoose;

const memorySchema = new Schema(
  {
    nameMemory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Memory", memorySchema);
