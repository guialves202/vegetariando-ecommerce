import express from "express";
import cors from 'cors';
import routes from "../routes/routes.js";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use(routes);

export default app;