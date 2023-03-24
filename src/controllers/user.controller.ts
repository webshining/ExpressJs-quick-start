import { Request, Response } from "express";
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
}

export default new UserController();
