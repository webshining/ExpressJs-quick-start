import express from 'express'
import sequelize from './db.js'
import { PORT } from './config/config.js'
import * as models from './models/relationships.js'
import router from './routes/index.js'

const app = express()
app.use(express.json())
app.use('/api', router)

const start = async () => {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))
}

start()