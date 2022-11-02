import {Sequelize} from 'sequelize'
import {DB_URI, LOGGING} from './config/config'

const sequelize = new Sequelize(DB_URI, {
    logging: LOGGING
})

export default sequelize