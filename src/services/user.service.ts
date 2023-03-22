import { FindOptionsWhere } from "typeorm";
import AppDataSource from "../db";
import { User } from "../models/user.entity";
import { CreateUserDto } from "./../dto/user.dto";

class UserService {
	private readonly userRepository = AppDataSource.getRepository(User);

	getOne = async (options: FindOptionsWhere<User>[] | FindOptionsWhere<User>): Promise<User | null> => {
		return this.userRepository.findOne({ where: options });
	};

	getMany = async (options?: FindOptionsWhere<User>[] | FindOptionsWhere<User>): Promise<User[]> => {
		return this.userRepository.find({ where: options });
	};

	create = async (dto: CreateUserDto): Promise<User> => {
		const user = this.userRepository.create(dto);
		return this.userRepository.save(user);
	};
}

export default UserService;
