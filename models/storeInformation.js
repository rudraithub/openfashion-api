const mongoose = require('mongoose')

const storeInformationSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    tagLine: {
        type: String,
        required: true,
        trim: true
    }
})

const StoreInfo = mongoose.model('StoreInformation', storeInformationSchema)

module.exports = StoreInfo