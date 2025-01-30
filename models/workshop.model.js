import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    durasi: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

workshopSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("Workshop", workshopSchema);
