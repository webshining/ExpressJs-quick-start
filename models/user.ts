import {DataTypes} from 'sequelize'
import sequelize from '../db.js'

// Model: modelName, attributes:{}, options:{}
const User = sequelize.define('users', {
    // Attributes for model
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    // Options for model
    timestamps: false
})

export default User