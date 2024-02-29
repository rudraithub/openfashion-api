const sequelize = require('../config/dbconnect')

const {DataTypes} = require('sequelize')
const category = require('./categories')

const Product = sequelize.define('products', {
    display_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    product_detail:{
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_discount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {timestamps: false})

category.hasMany(Product, {foreignKey: 'categoryID', as: 'product_detail', onDelete: 'CASCADE', onUpdate:'CASCADE'})
Product.belongsTo(category, {foreignKey: 'categoryID', onDelete: 'CASCADE', onUpdate:'CASCADE'})

module.exports = Product