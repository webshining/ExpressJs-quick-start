import Router from 'express'
import UserController from '../controllers/user.controller.js'
const router = new Router()

router.get('/', UserController.many)
router.get('/:id', UserController.one)

export default router