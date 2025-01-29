// let peserta = [
//   {
//     id: 1,
//     nama: "Peserta 1",
//     email: "peserta1@example.com",
//     terverifikasi: true,
//   },
//   {
//     id: 2,
//     nama: "Peserta 2",
//     email: "peserta2@example.com",
//     terverifikasi: false,
//   },
// ];

// export const getAllPeserta = () => {
//   if (!peserta.length) {
//     throw new Error("Peserta tidak ditemukan");
//   }
//   return peserta;
// };

// export const createPeserta = (obj) => {
//   const pesertaBaru = buatPeserta(obj);
//   peserta.push(pesertaBaru);
//   return pesertaBaru;
// };
// // helper function
// const buatPeserta = (data = {}) => ({
//   id: peserta.length + 1,
//   nama: data.nama || "",
//   email: data.email || "",
//   terverifikasi: false,
// });

// export const updatePeserta = (id, data) => {
//   const index = peserta.findIndex((pes) => pes.id === parseInt(id));
//   if (index === -1) {
//     return null;
//   }
//   peserta[index] = {
//     ...peserta[index],
//     ...data,
//   };
//   return peserta[index];
// };

// export const deletePesertaById = (id) => {
//   peserta = peserta.filter(pes => pes.id !== parseInt(id));
//   return peserta;
// }

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
