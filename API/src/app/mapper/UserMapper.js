import UserRepository from "../repositories/UserRepository.js";

class UserMapper {

    register(formData) {
        switch(formData.sexo) {
            case 'Masculino':
                formData.sexo = 'M'
                break;
            case 'Feminino':
                formData.sexo = 'F';
                break;
            default:
                formData.sexo = 'N';
        }
        const response = UserRepository.create(formData);
        return response;
    }

}

export default new UserMapper;