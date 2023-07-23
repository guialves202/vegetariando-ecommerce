import Sequelize from 'sequelize';

const OrderProductModel = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    orderId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'orders',
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

export default OrderProductModel;