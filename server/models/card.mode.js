import mongoose from "mongoose";
const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    nameCard: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Card", cardSchema);
