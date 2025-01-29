import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routerKompetisi from "./routes/kompetisi.route.js";
import routerPeserta from "./routes/peserta.route.js";
import routerWorkshop from "./routes/workshop.route.js";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", routerKompetisi);
app.use("/", routerPeserta);
app.use("/", routerWorkshop);

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB Connected");

    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect to DB due to ${err.message} error`);
  });
