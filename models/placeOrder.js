const sequelize = require("../config/dbconnect");

const { DataTypes } = require('sequelize')

const PlaceOrder = sequelize.define('placeOrder', {
    orderID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    shipping_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shipping_method: {
        type: DataTypes.ENUM,
        values: ['Pick Up At Store', 'Online Shopping']
    },
    payment_method: {
        type: DataTypes.ENUM,
        values: ['cash on delivery']
    }
})

module.exports = PlaceOrder