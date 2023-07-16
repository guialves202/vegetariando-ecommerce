import Sequelize from "sequelize";

const sequelize = new Sequelize('vegetariando', 'root', '123546', {
    host: 'localhost',
    dialect: 'mysql'
});

const Users = sequelize.define('users', {
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
})

const Address = sequelize.define('address', {
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
    }
})

const Contact = sequelize.define('contact', {
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING(12),
        allowNull: false
    },
})

const Product = sequelize.define('product', {
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
        type: Sequelize.TEXT(50),
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    peso: {
        type: Sequelize.INTEGER(10),
    },
    estoque: {
        type: Sequelize.INTEGER(10),
        allowNull: false
    }
})

const Orders = sequelize.define('orders', {
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
    }
})

// Users.sync();
// Address.sync();
// Contact.sync();
// Product.sync();
// Orders.sync();

sequelize.authenticate()
.then(() => {
    console.log('Conectado com sucesso');
})
.catch((err) => {
    console.log('Falha ao conectar: ', err);
})

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Users: Users,
    Address: Address,
    Contact: Contact,
    Product: Product,
    Orders: Orders
}

export default db;