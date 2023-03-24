import dataSource from '../db.js'
import User from '../models/user.entity.js'

class UserService {
    userRepository = dataSource.getRepository(User)

    getOne = async (options) => {
        return this.userRepository.findOne({where: options})
    }

    getMany = async (options = {}) => {
        return this.userRepository.find({where: options})
    }
}

export default UserService