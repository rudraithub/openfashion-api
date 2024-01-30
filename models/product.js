const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    display_image: {
        type: String,
        required: true,
        trim: true
    },
    product_name:{
        type: String,
        required: true,
        trim: true
    },
    product_detail:{
        type: String,
        required: true,
        trim: true
    },
    product_price: {
        type: String,
        required: true,
        trim: true
    },
    product_discount: {
        type: String,
        required: true,
        trim: true
    },
    product_image: [String]
})


const Product = mongoose.model('product', productSchema)

module.exports = Product