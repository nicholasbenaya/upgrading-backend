
import Kompetisi from "../models/kompetisi.model.js";

export const createKompetisi = async (data) => {
  try {
    const kompetisi = new Kompetisi(data);
    const savedKompetisi = await kompetisi.save();
    console.log(`Saved kompetisi: ${savedKompetisi}`);
    return savedKompetisi;
  } catch (error) {
    throw new Error(error);
  }
};


export const getAllKompetisiService = async () => {
  try {
    const allKompetisi = await Kompetisi.find();
    console.log(allKompetisi);
    return allKompetisi;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateKompetisiByNamaService = async (nama, data) => {
  try {
    const kompetisi = await Kompetisi.findOneAndUpdate(
      { nama: nama },
      { $set: data },
      { new: true }
    );
    return kompetisi;
  } catch (error) {
    throw new Error(error);
  }
};



export const deleteKompetisiByNamaService = async (nama) => {
  try {
    const kompetisi = await Kompetisi.findOneAndDelete({ nama: nama });
    return kompetisi;
  } catch (error) {
    throw new Error(error);
  }
};
