import {Router} from 'express'
const router = Router()

router.get('/users', (req, res) => {
    return res.json({message: 'All Work!'})
})

export default router