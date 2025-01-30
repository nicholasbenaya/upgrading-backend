import {
  createWorkshopService,
  getAllWorkshopService,
  updateWorkshopByNamaService,
  deleteWorkshopByNamaService,
} from "../services/workshop.service.js";

export const createWorkshopController = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ message: "There is no valid input" });
    const newWorkshop = await createWorkshopService(req.body);
    res.status(200).json(newWorkshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllWorkshopController = async (req, res) => {
  try {
    const allWorkshop = await getAllWorkshopService();
    res.status(200).json(allWorkshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateWorkshopByNamaController = async (req, res) => {
  try {
    const { nama } = req.params;
    if (!nama)
      return res
        .status(400)
        .json({ message: "Tidak ada parameter yang valid" });
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ message: "Tidak ada input valid" });
    const updatedWorkshop = await updateWorkshopByNamaService(nama, req.body);
    res.status(200).json(updatedWorkshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWorkshopByNamaController = async (req, res) => {
  try {
    const { nama } = req.params;
    if (!nama)
      return res
        .status(400)
        .json({ message: "Tidak ada parameter yang valid" });
    const deletedWorkshop = await deleteWorkshopByNamaService(nama);
    res.status(200).json(deletedWorkshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
