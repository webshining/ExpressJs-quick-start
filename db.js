import {Sequelize} from 'sequelize'
import {DB_URI} from './config/config.js'

const sequelize = new Sequelize(DB_URI)

export default sequelize