import Peserta from "../models/peserta.model.js";

export const createPesertaService = async (data) => {
  try {
    const newPeserta = new Peserta(data);
    const savedPeserta = await newPeserta.save();
    console.log(`Data Peserta: ${savedPeserta}`);
    return savedPeserta;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllPesertaService = async () => {
  try {
    const allPeserta = await Peserta.find();
    console.log(allPeserta);
    return allPeserta;
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePesertaByNamaService = async (nama, data) => {
  try {
    const updatedPeserta = await Peserta.findOneAndUpdate(
      { nama: nama },
      { $set: data },
      { new: true }
    );
    return updatedPeserta;
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePesertaByNamaService = async (nama) => {
  try {
    const deletedPeserta = await Peserta.findOneAndDelete({ nama: nama });
    return deletedPeserta;
  } catch (error) {
    throw new Error(error);
  }
};
