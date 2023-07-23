import db from "../database/db.js";

class CartRepository {

    async findCart() {
        return;
    }

    create(cart) {
        db.Cart.create(cart);
    }
}

export default new CartRepository;