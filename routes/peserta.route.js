import express from "express";

import {
  createPesertaController,
  getAllPesertaController,
  updatePesertaByNamaController,
  deletePesertaByNamaController
} from "../controllers/peserta.controller.js";

const routerPeserta = express.Router();

routerPeserta.get("/api/peserta", getAllPesertaController);
routerPeserta.post("/api/peserta", createPesertaController);
routerPeserta.patch("/api/peserta/:nama", updatePesertaByNamaController);
routerPeserta.delete("/api/peserta/:nama", deletePesertaByNamaController);

export default routerPeserta;
