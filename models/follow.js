const mongoose = require('mongoose')

const followSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
})


const Follow = mongoose.model('follow', followSchema)

module.exports = Follow
