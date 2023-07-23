import Sequelize from 'sequelize';

const CartModel = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantidade: {
        type: Sequelize.INTEGER(2),
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false
    },
    productId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'products',
            key: 'id'
        },
        allowNull: false
    }
}

export default CartModel;