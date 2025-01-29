import {
  createKompetisi,
  getAllKompetisiService,
  updateKompetisiByNamaService,
  deleteKompetisiByNamaService,
} from "../services/kompetisi.service.js";

export const getAllKompetisiController = async (req, res) => {
  try {
    const data = await getAllKompetisiService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createKompetisiController = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Tidak ada data yang diisi" });
    }
    const kompetisiBaru = await createKompetisi(req.body);
    res.status(200).json(kompetisiBaru);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateKompetisiByNamaController = async (req, res) => {
  try {
    const { nama } = req.params;
    if (!nama) {
      return res.status(400).json({ message: "Tidak ada input nama" });
    }
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Tidak ada data yang diberikan" });
    }
    const updatedKomp = await updateKompetisiByNamaService(nama, req.body);
    res.status(200).json(updatedKomp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteKompetisiByNamaController = async (req, res) => {
  try {
    const { nama } = req.params;
    if (!nama) {
      return res
        .status(400)
        .json({ message: "Tidak ada parameter nama yang diberikan" });
    }
    const deletedKomp = await deleteKompetisiByNamaService(nama);
    res.status(200).json(deletedKomp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
