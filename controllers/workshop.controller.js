import {
  getAllWorkshopService,
  createWorkshopService,
  updateWorkshopByIdService,
  deleteWorkshopByIdService,
} from "../services/workshop.service.js";

export const getAllWorkshopController = (req, res) => {
  try {
    const workshops = getAllWorkshopService();
    res.status(200).json(workshops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createWorkshopController = (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Harap masukan data" });
    }
    res.status(200).json(createWorkshopService(req.body));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateWorkshopByIdController = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Harap masukan ID" });
    }
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Harap masukan data" });
    }
    res.status(200).json(updateWorkshopByIdService(id, req.body));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWorkshopByIdController = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "No ID provided" });
    res.status(200).json(deleteWorkshopByIdService(id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
