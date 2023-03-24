import UserService from '../services/user.service.js'

class UserController {
    userService = new UserService()

    one = async (req, res) => {
        const user = await this.userService.getOne(req.params)
        if(!user) return res.json({message: "User not found!"}) 
        return res.json({user})
    }

    many = async (req, res) => {
        const users = await this.userService.getMany()
        return res.json({users})
    }
}

export default new UserController()