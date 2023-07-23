import db from "../database/db.js";

class CartRepository {

    async findCart() {
        return;
    }

    async create(id) {
        const cart = await db.Cart.create({
            quantidade: 1,
            productId: id,
            userId: 1
        });
        if(cart) {
            return true;
        }
    }
}

export default new CartRepository;