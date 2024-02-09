const { DataTypes } = require('sequelize')
const sequelize = require('../config/dbconnect')

const category = sequelize.define('categories', {
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
},{timestamps: false})

module.exports = category