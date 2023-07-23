import Sequelize from 'sequelize';

const OrderModel = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cliente: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    valor: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER(5),
        allowNull: false
    },
    finalizado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    pagamento: {
        type: Sequelize.INTEGER(5),
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false
    }
}

export default OrderModel;