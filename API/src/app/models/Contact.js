import Sequelize from 'sequelize';

const ContactModel = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(12),
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

export default ContactModel;