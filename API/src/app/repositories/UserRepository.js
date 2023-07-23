import db from "../database/db.js";
import bcrypt from 'bcrypt';

class UserRepository {

    async findUser() {
        return;
    }

    async create(userData) {
        const user = await db.User.findOrCreate({
            where: {cpf: userData.cpf},
            defaults: {
                name: userData.name,
                surname: userData.surname,
                cpf: userData.cpf,
                sexo: userData.sexo,
                nascimento: userData.nascimento,
                password: bcrypt.hashSync(userData.passw, 10),
            }
        })
        if(user[1]) {
            const contact = await db.Contact.create({
                userId: user[0].dataValues.id,
                telefone: userData.telefone,
                email: userData.email
            })
            console.log(contact);
            if(contact) {
                return true;
            }
        }
        
        
    }
}

export default new UserRepository;