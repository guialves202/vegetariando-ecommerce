import express from "express";
import cors from 'cors';
import routes from "../routes/routes.js";
import session from "express-session";
import flash from 'connect-flash';
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from "url";
import passport from "passport";
import userAuth from "./auth.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(session({
    secret: 'vegetariando-ecommerce',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 1000 }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
})

app.use(routes);

export default app;