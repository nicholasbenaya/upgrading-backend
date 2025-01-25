import express from 'express'
import dotenv from 'dotenv'
import routerKompetisi from './routes/kompetisi.route.js';
import routerPeserta from './routes/peserta.route.js';

dotenv.config();


const app = express()
const port = process.env.SERVER_PORT

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.use('/', routerKompetisi);
app.use('/', routerPeserta);


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})