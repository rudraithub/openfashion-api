const mongoose = require('mongoose')

const URL = 'mongodb://127.0.0.1:27017/openfashion'

const dbconnect = async () => {
    try {
        await mongoose.connect(URL)

        console.log('database connection success!')
    } catch (error) {
        console.log(`databasw connection error: ${error}`)
    }
}

dbconnect()