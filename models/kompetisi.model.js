import mongoose from "mongoose";
const kompetisiSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      unique: true,
    },
    waktuMulai: {
      type: String,
      required: true,
    },
    waktuAkhir: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

kompetisiSchema.set("toJSON", {
    transform: (doc, ret) => {
      delete ret.__v;
      return ret;
    },
  });

export default mongoose.model("Kompetisi", kompetisiSchema);
