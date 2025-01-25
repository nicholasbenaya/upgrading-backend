let kompetisi = [
  {
    id: 1,
    nama: "Robotics",
    waktuMulai: "",
    waktuAkhir: "2025-02-01 15:00:00",
  },
  {
    id: 2,
    nama: "App Development",
    waktuMulai: "2025-02-02 14:00:00",
    waktuAkhir: "2025-02-02 18:00:00",
  },
];

export const getAllKompetisi = () => {
  if (!kompetisi.length) {
    throw new Error("Tidak ada kompetisi");
  }
  return kompetisi;
};

export const createKompetisi = (obj) => {
  const kompetisiBaru = buatKompetisi(obj);
  kompetisi.push(kompetisiBaru);
  return kompetisiBaru;
};
// helper function
const buatKompetisi = (data = {}) => ({
  id: kompetisi.length + 1,
  nama: data.nama || "",
  waktuMulai: data.waktuMulai || "",
  waktuAkhir: data.waktuAkhir || "",
});

export const updateKompetisiById = (id, data) => {
  const index = kompetisi.findIndex((komp) => komp.id === parseInt(id));

  if (index === -1) {
    return null;
  }
  kompetisi[index] = {
    ...kompetisi[index],
    ...data,
  };

  return kompetisi[index];
};

export const deleteKompetisiById = (id) => {
  kompetisi = kompetisi.filter(komp => komp.id !== parseInt(id));
  return kompetisi;
}