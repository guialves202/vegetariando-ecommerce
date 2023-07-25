import db from "../database/db.js";
import bcrypt from 'bcrypt';

class UserRepository {

    async findUser() {
        return;
    }

    async create(userData) {
        const passwResult = verifyPassword(userData.passw, userData.passw2);
        if(passwResult.success) {
            const user = await db.User.findOrCreate({
                where: {cpf: userData.cpf},
                defaults: {
                    name: userData.name,
                    surname: userData.surname,
                    cpf: userData.cpf,
                    sexo: userData.sexo,
                    nascimento: userData.nascimento,
                    password: bcrypt.hashSync(userData.passw, 10)
                }
            })
            if(user[1]) {
                const contact = await db.Contact.create({
                    userId: user[0].dataValues.id,
                    telefone: userData.telefone,
                    email: userData.email
                })
                if(contact) {
                    return true;
                }
            }
        } else {
            return passwResult;
        }
    }
}

function verifyPassword(passw1, passw2) {
    var erros = [];
    if(passw1 !== passw2) {
        erros.push({text: 'As senhas são diferentes'})
    }
    if(!passw1 && passw1 == undefined || passw1 == null) {
        erros.push({text: 'Senha inválida'});
    }
    const letrasMaiusculas = /[A-Z]/;

    const letrasMinusculas = /[a-z]/;

    const numeros = /[0-9]/;

    const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    let temMaiuscula, temMinuscula, temNum, temEspecial = false;

    if(passw1.length < 6) {
        erros.push({text: 'A passw1 precisa ter no mínimo 6 dígitos'});
    };

    for(let i = 0; i < passw1.length; i++) {
        if(letrasMaiusculas.test(passw1[i])) {
            temMaiuscula = true;
        } else if(letrasMinusculas.test(passw1[i])) {
            temMinuscula = true;
        } else if(numeros.test(passw1[i])) {
            temNum = true;
        } else if(caracteresEspeciais.test(passw1[i])) {
            temEspecial = true;
        } else {
            erros.push({text: 'A senha possui um caractere inválido'})
        }
    }

    if(!temMaiuscula) {
        erros.push({text:'A senha precisa ter ao menos 1 letra maiúscula'})
    }
    if(!temMinuscula) {
        erros.push({text:'A senha precisa ter ao menos 1 letra minúscula'})
    }
    if(!temNum) {
        erros.push({text:'A senha precisa ter ao menos 1 número'})
    }
    if(!temEspecial) {
        erros.push({text:'A senha precisa ter ao menos 1 caractere especial'})
    }

    if(erros.length > 0) {
        return {success: false, erros};
    } else {
        return {success: true};
    }
}

export default new UserRepository;