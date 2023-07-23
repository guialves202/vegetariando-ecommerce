import UserRepository from "../repositories/UserRepository.js";

class UserController {

    index(req, res) {
        return;
    }

    store(req, res) {
        const response = UserRepository.create(req.body);
        if(response) {
            res.redirect('/');
        }
    }

}

export default new UserController;