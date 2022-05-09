import {Sequelize} from 'sequelize'
import {DB_URI} from './data/config.js'

const sequelize = new Sequelize(DB_URI)

export default sequelize