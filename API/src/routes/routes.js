import UserController from "../app/controllers/UserController.js";
import CartController from '../app/controllers/CartController.js';
import { Router } from "express";
import passport from "passport";

const routes = Router();
const main = 'layouts/main';



routes.get('/', async (req, res) => {
    res.render(main, {content: '../index.ejs', cssPath: 'css/index.css', useHeader:true, jsPath: 'js/index.js'});
})

routes.get('/login', (req, res) => {
    if(req.query.fail) {
        res.render(main, {content: '../login.ejs', cssPath: 'css/login.css', useHeader:false, message: 'Erro ao fazer login', jsPath: 'js/index.js'});
    } else {
        res.render(main, {content: '../login.ejs', cssPath: 'css/login.css', useHeader:false, message:'', jsPath: 'js/index.js'});
    }
    
})

routes.get('/cart', (req, res) => {
    res.render(main, {content: '../cart.ejs', cssPath: 'css/cart.css', useHeader: true, message:'', jsPath: 'js/index.js'})
})

routes.get('/register', (req, res) => {
    res.render(main, {content: '../register.ejs', cssPath: 'css/register.css', useHeader: false, message:'', jsPath: 'js/register.js'})
})

routes.post('/register', UserController.store)

routes.post('/cart/add', CartController.store)

routes.post('/login', UserController.index)

// routes.get('/logout', (req, res, next) => {
//     req.logout((err) => {
//         if(err) return next(err);
//         req.flash('success_msg', 'Deslogado com sucesso');
//         res.redirect('/')
//     })
// })

export default routes;