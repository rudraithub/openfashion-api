const sequelize = require('../config/dbconnect')

const { DataTypes } = require('sequelize')

const AddToCart = sequelize.define('addTocart', {
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = AddToCart