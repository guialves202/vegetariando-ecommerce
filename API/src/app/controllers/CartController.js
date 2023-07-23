import CartRepository from "../repositories/CartRepository.js";

class CartController {
    store(req, res) {
        const response = CartRepository.create(req.body);
    }
}

export default new CartController;