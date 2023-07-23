import Sequelize from 'sequelize';

const AddressModel = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rua: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    num: {
        type: Sequelize.STRING(5),
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING(8),
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

export default AddressModel;