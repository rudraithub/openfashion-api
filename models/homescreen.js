const sequelize = require('../config/dbconnect')

const { DataTypes } = require('sequelize')

const Homescreen = sequelize.define('homescreen', {
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_title: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{timestamps: false})

module.exports = Homescreen