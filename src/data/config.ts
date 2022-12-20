import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 7000

export const DB_NAME: string = process.env.DB_NAME || 'database'

export const DB_USER: string | any = process.env.DB_USER
export const DB_PASS: string | any = process.env.DB_PASS
export const DB_PORT: number | any = Number(process.env.DB_PORT)
export const DB_HOST: string | any = process.env.DB_HOST

export const LOGGING: boolean = process.env.LOGGING === 'true'
