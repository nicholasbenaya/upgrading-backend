import {
  getAllKompetisi,
  createKompetisi,
  updateKompetisiById,
  deleteKompetisiById,
} from "../services/kompetisi.service.js";

export const getAllKompetisiController = (req, res) => {
  try {
    const data = getAllKompetisi();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createKompetisiController = (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Tidak ada data yang diisi" });
    }
    const kompetisiBaru = createKompetisi(req.body);
    res.status(200).json(kompetisiBaru);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateKompetisiController = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Tidak dapat mengenali ID" });
    }
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Tidak ada data pembaruan yang diberikan" });
    }
    const updatedKompetisi = updateKompetisiById(id, req.body);
    if (!updatedKompetisi) {
      return res.status(400).json({ message: "Kompetisi tidak ditemukan" });
    }
    res.status(200).json(updatedKompetisi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteKompetisiController = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Tidak dapat mengenali ID" });
    }
    const updatedKompetisi = deleteKompetisiById(id);
    res.status(200).json(updatedKompetisi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
