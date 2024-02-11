const sequelize = require('../config/dbconnect')
const { DataTypes } = require('sequelize')
const Product = require('./product')

const ProductImage = sequelize.define('productImages', {
    product_image: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false})

Product.hasMany(ProductImage, { foreignKey: 'productID', as: 'product_images' })
ProductImage.belongsTo(Product, { foreignKey: 'productID' })

module.exports = ProductImage