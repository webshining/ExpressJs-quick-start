import { DataSource } from 'typeorm'
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER, LOGGING } from './data/config.js'
import User from './models/user.entity.js'

const options = DB_USER && DB_PASS && DB_HOST && DB_PORT && DB_NAME ? {
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
} : {
    type: "sqlite",
    database: "database.sqlite3",
}

const AppDataSource = new DataSource({
    ...options,
    entities: [User],
    synchronize: true,
    logging: LOGGING
})

AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized")
    })
    .catch((error) => console.log(error))

export default AppDataSource