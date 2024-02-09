const sequelize = require('../config/dbconnect')
const {DataTypes} = require('sequelize')
const Product = require('./product')

const ProductImage  = sequelize.define('productImages', {
    productID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    product_iamge: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Product.hasMany(ProductImage, {foreignKey: 'productID', as: 'product_images'})
ProductImage.belongsTo(Product, {foreignKey: 'productID'})

module.exports = ProductImage