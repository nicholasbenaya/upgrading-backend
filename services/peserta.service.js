let peserta = [
  {
    id: 1,
    nama: "Peserta 1",
    email: "peserta1@example.com",
    terverifikasi: true,
  },
  {
    id: 2,
    nama: "Peserta 2",
    email: "peserta2@example.com",
    terverifikasi: false,
  },
];

export const getAllPeserta = () => {
  if (!peserta.length) {
    throw new Error("Peserta tidak ditemukan");
  }
  return peserta;
};

export const createPeserta = (obj) => {
  const pesertaBaru = buatPeserta(obj);
  peserta.push(pesertaBaru);
  return pesertaBaru;
};
// helper function
const buatPeserta = (data = {}) => ({
  id: peserta.length + 1,
  nama: data.nama || "",
  email: data.email || "",
  terverifikasi: false,
});

export const updatePeserta = (id, data) => {
  const index = peserta.findIndex((pes) => pes.id === parseInt(id));
  if (index === -1) {
    return null;
  }
  peserta[index] = {
    ...peserta[index],
    ...data,
  };
  return peserta[index];
};

export const deletePesertaById = (id) => {
  peserta = peserta.filter(pes => pes.id !== parseInt(id));
  return peserta;
}