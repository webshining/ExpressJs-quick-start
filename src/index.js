import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { PORT } from './data/config.js'
import routes from './routes/index.js'

const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api', routes)

const start = async () => {
    app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))
}

start()