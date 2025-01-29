// let kompetisi = [
//   {
//     id: 1,
//     nama: "Robotics",
//     waktuMulai: "",
//     waktuAkhir: "2025-02-01 15:00:00",
//   },
//   {
//     id: 2,
//     nama: "App Development",
//     waktuMulai: "2025-02-02 14:00:00",
//     waktuAkhir: "2025-02-02 18:00:00",
//   },
// ];
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

// export const getAllKompetisi = () => {
//   if (!kompetisi.length) {
//     throw new Error("Tidak ada kompetisi");
//   }
//   return kompetisi;
// };
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

// export const deleteKompetisiById = (id) => {
//   kompetisi = kompetisi.filter(komp => komp.id !== parseInt(id));
//   return kompetisi;
// }

export const deleteKompetisiByNamaService = async (nama) => {
  try {
    const kompetisi = await Kompetisi.findOneAndDelete({ nama: nama });
    return kompetisi;
  } catch (error) {
    throw new Error(error);
  }
};
