import {
  getAllPeserta,
  createPeserta,
  updatePeserta,
  deletePesertaById,
} from "../services/peserta.service.js";

export const getAllPesertaController = (req, res) => {
  try {
    const peserta = getAllPeserta();
    if (!peserta) {
      return res
        .status(400)
        .json({ message: "Tidak ada peserta yang ditemukan" });
    }
    res.status(200).json(peserta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPesertaController = (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "No data provided" });
    }
    const pesertaBaru = createPeserta(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePesertaController = (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body) {
      return res.status(400).json({ message: "No data provided" });
    }
    if (!id) {
      return res.status(400).json({ message: "Tidak dapat mengenali ID" });
    }

    res.status(200).json(updatePeserta(id, req.body));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePesertaByIdController = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Tidak dapat mengelai ID" });
    }
    res.status(200).json(deletePesertaById(id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
