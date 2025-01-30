import express from "express";
import {
  createWorkshopController,
  getAllWorkshopController,
  updateWorkshopByNamaController,
  deleteWorkshopByNamaController,
} from "../controllers/workshop.controller.js";
const routerWorkshop = express.Router();

routerWorkshop.get("/api/workshop", getAllWorkshopController);
routerWorkshop.post("/api/workshop", createWorkshopController);
routerWorkshop.patch("/api/workshop/:nama", updateWorkshopByNamaController);
routerWorkshop.delete("/api/workshop/:nama", deleteWorkshopByNamaController);

export default routerWorkshop;
