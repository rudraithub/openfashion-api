const sequelize = require('../config/dbconnect')
const { DataTypes } = require('sequelize')

const ProductDetails = sequelize.define('product_details', {
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false})

module.exports = ProductDetails