import {
  createPesertaService,
  getAllPesertaService,
  updatePesertaByNamaService,
  deletePesertaByNamaService,
} from "../services/peserta.service.js";

export const createPesertaController = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No data provided" });
    }
    const newPeserta = await createPesertaService(req.body);
    res.status(200).json(newPeserta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllPesertaController = async (req, res) => {
  try {
    const allPeserta = await getAllPesertaService();
    res.status(200).json(allPeserta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePesertaByNamaController = async (req, res) => {
  try {
    const { nama } = req.params;
    if (!nama)
      return res.status(400).json({ message: "There is no valid parameter" });
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ message: "There is no valid input" });
    const updatedPeserta = await updatePesertaByNamaService(nama, req.body);
    res.status(200).json(updatedPeserta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePesertaByNamaController = async (req, res) => {
  try {
    const { nama } = req.params;
    if (!nama) res.status(400).json({ message: "There is no valid parameter" });
    const deletedPeserta = await deletePesertaByNamaService(nama);
    res.status(200).json(deletedPeserta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const getAllPesertaController = (req, res) => {
//   try {
//     const peserta = getAllPeserta();
//     if (!peserta) {
//       return res
//         .status(400)
//         .json({ message: "Tidak ada peserta yang ditemukan" });
//     }
//     res.status(200).json(peserta);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const createPesertaController = (req, res) => {
//   try {
//     if (Object.keys(req.body).length === 0) {
//       return res.status(400).json({ message: "No data provided" });
//     }
//     const pesertaBaru = createPeserta(req.body);
//     res.status(200).json(req.body);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const updatePesertaController = (req, res) => {
//   try {
//     const { id } = req.params;
//     if (Object.keys(req.body).length === 0) {
//       return res.status(400).json({ message: "No data provided" });
//     }
//     if (!id) {
//       return res.status(400).json({ message: "Tidak dapat mengenali ID" });
//     }

//     res.status(200).json(updatePeserta(id, req.body));
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deletePesertaByIdController = (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!id) {
//       return res.status(400).json({ message: "Tidak dapat mengelai ID" });
//     }
//     res.status(200).json(deletePesertaById(id));
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
