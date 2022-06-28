import Router from 'express'
const router = new Router()

router.get('/users', (req, res) => {
    return res.json({message: 'All Work!'})
})

export default router