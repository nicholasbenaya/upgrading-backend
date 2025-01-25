import express from "express";
import {
  getAllKompetisiController,
  createKompetisiController,
  updateKompetisiController,
  deleteKompetisiController,
} from "../controllers/kompetisi.controller.js";

const routerKompetisi = express.Router();

routerKompetisi.get("/api/kompetisi", getAllKompetisiController);
routerKompetisi.post("/api/kompetisi", createKompetisiController);
routerKompetisi.patch("/api/kompetisi/:id", updateKompetisiController);
routerKompetisi.delete("/api/kompetisi/:id", deleteKompetisiController);

export default routerKompetisi;
