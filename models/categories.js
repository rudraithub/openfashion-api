const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        trim: true
    },
    categoryID: {
        type: Number,
        trim: true
    }
})


const category = mongoose.model('category', categorySchema)

module.exports = category