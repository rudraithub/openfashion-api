const sequelize = require('../config/dbconnect')
const { DataTypes } = require('sequelize')

const StoreInfo = sequelize.define('storeinformation', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    time:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tagLine: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = StoreInfo

