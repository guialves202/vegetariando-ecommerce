import UserController from "../app/controllers/UserController.js";
import CartController from '../app/controllers/CartController.js';
import { Router } from "express";

const routes = Router();
const main = 'layouts/main';

routes.get('/', (req, res) => {
    res.render(main, {content: '../index.ejs', cssPath: 'css/index.css', useHeader:true});
})

routes.get('/login', (req, res) => {
    res.render(main, {content: '../login.ejs', cssPath: 'css/login.css', useHeader:false});
})

routes.get('/cart', (req, res) => {
    res.render(main, {content: '../cart.ejs', cssPath: 'css/cart.css', useHeader: true})
})

routes.get('/register', (req, res) => {
    res.render(main, {content: '../register.ejs', cssPath: 'css/register.css', useHeader: false})
})

routes.post('/register', UserController.store)

routes.post('/cart/add', CartController.store)

export default routes;