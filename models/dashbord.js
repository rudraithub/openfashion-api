const mongoose = require('mongoose')

const dashboradSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        trim: true
    },
    image_title: {
        type: String,
        required: true,
        trim: true
    }
})

const Dashboard = mongoose.model('Dashboard', dashboradSchema)

module.exports = Dashboard