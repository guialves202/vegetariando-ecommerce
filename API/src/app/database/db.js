import Sequelize from "sequelize";
import UserModel from '../models/User.js'
import CartModel from "../models/Cart.js";
import ProductModel from "../models/Product.js";
import OrderModel from '../models/Order.js';
import ContactModel from "../models/Contact.js";
import AddressModel from "../models/Address.js";
import OrderProductModel from "../models/OrderProduct.js";

const sequelize = new Sequelize('vegetariando', 'root', '123546', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('users', UserModel);
const Cart = sequelize.define('carts', CartModel);
const Product = sequelize.define('products', ProductModel);
const Order = sequelize.define('orders', OrderModel);
const Contact = sequelize.define('contacts', ContactModel);
const Address = sequelize.define('addresses', AddressModel);
const OrderProduct = sequelize.define('orderproducts', OrderProductModel);

User.belongsToMany(Product, {through: Cart});
Product.belongsToMany(User, {through: Cart});

Address.belongsTo(User);
User.hasOne(Address);

Order.belongsTo(User);
User.hasMany(Order);

User.hasOne(Contact);
Contact.belongsTo(User);

Order.belongsToMany(Product, {through: OrderProduct});
Product.belongsToMany(Order, {through: OrderProduct});

// User.sync();
// Cart.sync();
// Product.sync();
// Order.sync();
// Contact.sync();
// Address.sync();
// OrderProduct.sync();

sequelize.authenticate()
.then(() => {
    console.log('Conectado ao MySQL com sucesso');
})
.catch((err) => {
    console.log(`Falha ao se conectar ao banco: ${err}`);
})

const db = {
    sequelize,
    User,
    Cart,
    Product,
    Address,
    Contact,
    Order,
    OrderProduct
}

// sequelize.sync();

export default db



