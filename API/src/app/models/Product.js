import Sequelize from 'sequelize';

const ProductModel = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cod: {
        type: Sequelize.STRING(10),
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
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    peso: {
        type: Sequelize.INTEGER(10)
    },
    estoque: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    }
}

export default ProductModel;