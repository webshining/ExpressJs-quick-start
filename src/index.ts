import express, {Application} from 'express'
import cors from 'cors'
import { PORT } from './data/config'
import routes from './routes'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/api', routes)

const start = async () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

start()