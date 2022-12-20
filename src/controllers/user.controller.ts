import {FindOptionsWhere, FindManyOptions} from "typeorm";
import {User} from "../models/user.entity";
import DBConnect from '../db'

class UserController {
    private userRepository = DBConnect.getRepository(User)

    async all(options?: FindManyOptions<User>): Promise<User[]> {
        return this.userRepository.find(options)
    }

    async one(options: FindOptionsWhere<User> | FindOptionsWhere<User>[]): Promise<User | null> {
        return this.userRepository.findOneBy(options)
    }

    async save(data: User): Promise<User> {
        const user = this.userRepository.create(data)
        return this.userRepository.save(user)
    }

    async remove(options: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
        const user = await this.one(options)
        return user && this.userRepository.remove(user)
    }
}

export default new UserController()