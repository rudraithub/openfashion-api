const mongoose = require('mongoose')

const productDetailsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    }
})

const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema)

module.exports = ProductDetails