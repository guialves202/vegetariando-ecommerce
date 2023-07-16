import UserRepository from "../repositories/UserRepository.js";

class UserController {

    index(req, res) {
        return;
    }

    store(req, res) {
        const response = UserRepository.create(req.body);
        res.send(response.json());
    }

}

export default new UserController;