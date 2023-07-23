import Sequelize from 'sequelize';

const UserModel = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING(80),
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING(1),
        allowNull: false
    },
    nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
}

export default UserModel;