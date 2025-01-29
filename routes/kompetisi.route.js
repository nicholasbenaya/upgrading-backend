import express from "express";
import {
  createKompetisiController,
  getAllKompetisiController,
  updateKompetisiByNamaController,
  deleteKompetisiByNamaController
} from "../controllers/kompetisi.controller.js";

const routerKompetisi = express.Router();

routerKompetisi.get("/api/kompetisi", getAllKompetisiController);
routerKompetisi.post("/api/kompetisi", createKompetisiController);
routerKompetisi.patch("/api/kompetisi/:nama", updateKompetisiByNamaController);
routerKompetisi.delete("/api/kompetisi/:nama", deleteKompetisiByNamaController);

export default routerKompetisi;
