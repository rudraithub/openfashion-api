const sequelize = require('../config/dbconnect')
const { DataTypes } = require('sequelize')

const Follow = sequelize.define('follow',{
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false})


module.exports = Follow
