import {Router} from 'express'
const router = Router()
import UserController from '../controllers/user.controller'

router.get('/', async (req, res) => {
    return res.json({users: await UserController.all()})
})

router.get('/:id', async (req, res) => {
    const user = await UserController.one({id: Number(req.params.id)})
    return res.json(user ? {user: user} : {message: "User not found"})
})

export default router