import {Router} from 'express'
const router = Router()
import userRouter from './user.router'

router.use('/users', userRouter)

export default router