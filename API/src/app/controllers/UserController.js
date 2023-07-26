import { name } from "ejs";
import UserRepository from "../repositories/UserRepository.js";
import passport from "passport";
import UserMapper from "../mapper/UserMapper.js";

class UserController {

    index(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login?fail=true'
        })(req, res, next)
    }

    store(req, res) {
        const user = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            cpf: req.body.cpf,
            sexo: req.body.sexo,
            nascimento: req.body.nascimento,
            telefone: req.body.telefone,
            passw: req.body.passw,
            passw2: req.body.passw2
        };

        const isValid = userValidation(user);

        if(isValid) {
            const response = UserMapper.register(user);
            if(response) {
                res.redirect('/');
            }
        } else {
            res.redirect('/login');
        }
    }

}

function userValidation(user) {
    let erro = false;
    for(const key in user) {
        switch(key) {
            case 'name':
            case 'surname':
            case 'sexo':
                erro = haveNumber(user[key]) ? true : erro;
                erro = dontHaveDifferentCaracteres(user[key]) ? true : erro;
                break;
            case 'cpf':
            case 'telefone':
                erro = haveLetter(user[key]) ? true : erro;
                erro = user[key].length != 11 ? true : erro;
                erro = dontHaveDifferentCaracteres(user[key]) ? true : erro;
                break;
            case 'email':
                erro = !(user[key].includes('.')) ? true : erro;
                erro = dontHaveDifferentCaracteres(user[key]) ? true : erro;
                break;
            case 'passw':
                erro = passwordVerify(user[key]) ? true : erro;
                erro = user.passw === user.passw2 ? erro : true;
            default:
                erro = erro;
        }
    }
    return !erro
}

function haveNumber(data) {
    for(const letter of data) {
        if(/[0-9]/.test(letter)) return true;
    }
    return false;
}

function haveLetter(data) {
    for(const letter of data) {
        if(/[A-Z]/.test(letter) || /[a-z]/.test(letter)) return true;
    }
    return false;
}

function haveUpperCaseLetter(data) {
    for(const letter of data) {
        if(/[A-Z]/.test(letter)) return true;
    }
    return false;
}

function dontHaveDifferentCaracteres(data) {
    const firstCaracter = data[0];
    for(const letter of data) {
        if(letter != firstCaracter) return false;
    }
    return true;
}

function haveEspecialCaracter(data) {
    for(const letter of data) {
        if(/[!|@|#|$|%|^|&|*|(|)|-|_]/.test(letter)) return true;
    }
    return false;
}

function passwordVerify(password) {
    let erro = false;
    erro = haveNumber(password) ? erro : true;
    erro = haveLetter(password) ? erro : true;
    erro = haveUpperCaseLetter(password) ? erro : true;
    erro = password.length < 6 ? true : erro;
    return erro;
}

export default new UserController;