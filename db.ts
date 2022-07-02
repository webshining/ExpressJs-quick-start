import {Sequelize} from 'sequelize'
import {DB_URI} from './data/config'

const sequelize = new Sequelize(DB_URI)

export default sequelize