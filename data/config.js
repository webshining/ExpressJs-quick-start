import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 7000

const DB_NAME = process.env.DB_NAME

const DB_USER = process.env.DB_USER 
const DB_PASS = process.env.DB_PASS 
const DB_PORT = process.env.DB_PORT 
const DB_HOST = process.env.DB_HOST 


// Create database uri with existing data
let DB_URI = `sqlite://data/${DB_NAME}.sqlite`

if (DB_USER && DB_PASS && DB_HOST && DB_PORT && DB_NAME) {
    DB_URI = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
}

export {DB_URI, PORT}