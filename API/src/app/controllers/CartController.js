import CartRepository from "../repositories/CartRepository.js";

class CartController {
    store(req, res) {
        const response = CartRepository.create(req.body.id);
        if(response.deuErro) {
            res.redirect('/');
        }
    }
}

export default new CartController;