import db from "../database/connection.js";

class UserRepository {

    async findUser() {
        return;
    }

    create(user) {
        db.Users.create(user);
    }
}

export default new UserRepository;