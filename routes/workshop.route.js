import express from "express";
import {
  getAllWorkshopController,
  createWorkshopController,
  updateWorkshopByIdController,
  deleteWorkshopByIdController
} from "../controllers/workshop.controller.js";
const routerWorkshop = express.Router();

routerWorkshop.get("/api/workshop", getAllWorkshopController);
routerWorkshop.post("/api/workshop", createWorkshopController);
routerWorkshop.patch("/api/workshop/:id", updateWorkshopByIdController);
routerWorkshop.delete("/api/workshop/:id", deleteWorkshopByIdController);

export default routerWorkshop;
