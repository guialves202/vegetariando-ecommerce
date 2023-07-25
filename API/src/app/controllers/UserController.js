import UserRepository from "../repositories/UserRepository.js";
import passport from "passport";

class UserController {

    index(req, res, next) {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login?fail=true'
        })(req, res, next)
    }

    store(req, res) {
        const response = UserRepository.create(req.body);
        if(response) {
            res.redirect('/');
        }
    }

}

export default new UserController;