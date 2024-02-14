const sequelize = require('../config/dbconnect')

const {DataTypes} = require('sequelize')

const AddShippingAddress = sequelize.define('shippingAddress', {
    orderID : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        // allowNull: false
    }
},{timestamps: false})

module.exports = AddShippingAddress