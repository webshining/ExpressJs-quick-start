import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 7000

export const DB_NAME = process.env.DB_NAME
export const DB_USER = process.env.DB_USER 
export const DB_PASS = process.env.DB_PASS 
export const DB_PORT = process.env.DB_PORT 
export const DB_HOST = process.env.DB_HOST 

export const LOGGING = process.env.LOGGING === 'true'

export const BUILD_FORMAT = process.env.BUILD_FORMAT || 'esm'