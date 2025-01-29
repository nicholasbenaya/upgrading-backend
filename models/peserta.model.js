import mongoose from "mongoose";

const pesertaSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  terverifikasi: {
    type: Boolean,
    required: true,
    default: false,
  },
});
pesertaSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("Peserta", pesertaSchema);
