import express from "express";

import {
  getAllPesertaController,
  createPesertaController,
  updatePesertaController,
  deletePesertaByIdController
} from "../controllers/peserta.controller.js";

const routerPeserta = express.Router();

routerPeserta.get("/api/peserta", getAllPesertaController);
routerPeserta.post("/api/peserta", createPesertaController);
routerPeserta.patch("/api/peserta/:id", updatePesertaController);
routerPeserta.delete("/api/peserta/:id", deletePesertaByIdController);

export default routerPeserta;
