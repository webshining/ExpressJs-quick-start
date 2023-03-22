import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { CreateUserDto } from "../dto/user.dto";
import UserService from "../services/user.service";

class UserController {
	private userService = new UserService();

	one = async (req: Request, res: Response) => {
		const user = await this.userService.getOne(req.params);
		return user ? res.status(200).json({ user }) : res.json({ message: "User not found!" });
	};

	many = async (req: Request, res: Response) => {
		const users = await this.userService.getMany();
		return res.status(200).json({ users });
	};

	register = async (req: Request<{}, {}, CreateUserDto>, res: Response) => {
		const { username, email, password } = req.body;
		const candidate = await this.userService.getOne([{ username }, { email }]);
		if (candidate) return res.json({ message: "User with this username or email is already exists!" });
		const hashPass = await bcrypt.hash(password, 7);
		const user = await this.userService.create({ username, email, password: hashPass });
		return res.status(200).json({ user });
	};

	login = async (req: Request<{}, {}, { email: string; password: string }>, res: Response) => {
		const { email, password } = req.body;
		const user = await this.userService.getOne([{ email }, { username: email }]);
		if (!user) return res.json({ message: "User not found!" });
		const comparePass = await bcrypt.compare(password, user.password);
		if (!comparePass) return res.json({ message: "Passworn is incorrect!" });
		return res.status(200).json({ user });
	};
}

export default new UserController();
