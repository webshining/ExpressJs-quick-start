import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 7000

const DB_NAME: string = process.env.DB_NAME || 'database'

const DB_USER: string = process.env.DB_USER
const DB_PASS: string = process.env.DB_PASS
const DB_PORT: string = process.env.DB_PORT
const DB_HOST: string = process.env.DB_HOST

const LOGGING: boolean = process.env.LOGGING === 'true'


// Create database uri with existing data
let DB_URI: string = `sqlite://data/${DB_NAME}.sqlite`

if (DB_USER && DB_PASS && DB_HOST && DB_PORT && DB_NAME) {
    DB_URI = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
}

export {DB_URI, PORT, LOGGING}