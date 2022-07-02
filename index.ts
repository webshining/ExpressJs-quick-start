import express from 'express'
import sequelize from './db'
import { PORT } from './data/config'
import * as models from './models/relationships'
import router from './routes/index'

const app = express()
app.use(express.json())
app.use('/api', router)

const start = async () => {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))
}

start()