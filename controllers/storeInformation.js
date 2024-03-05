const Follow = require('../models/follow')
const ProductDetails = require('../models/productDetails')
const StoreInfo = require('../models/storeInformation')
const { validMobileNumber , isEmailValid} = require('../utils/validation')

exports.addStoreInformation = async (req, res, next) => {
    try {
        const {email, phone, time, tagLine} = req.body

        const isData = await StoreInfo.findOne({where: {email, phone}})

        if(isData){
            throw new Error('information already stored!')
        }

        if(!isNaN(time)) throw new Error('time should be character')
        if(!isNaN(tagLine)) throw new Error('tag line should be character')

        isEmailValid(email)

        const isMob = validMobileNumber(phone)

        const information = StoreInfo.build({
            email,
            phone:isMob,
            time,
            tagLine
        })

        await information.save()

        res.status(200).json({
            status: 200,
            data: information,
            message: 'Store Information Saved'
        })
    } catch (error) {
       next(error)
    }
}


exports.getStoreInformation = async (req, res, next) => {
    try {
        const information = await StoreInfo.findOne({})
        if(!information){
            return res.status(400).json({
                status: 400,
                message: 'no details found!'
            })
        }

        const follow = await Follow.findAll()
        const product_detail = await ProductDetails.findAll()

        const responceData = {
            email: information.email,
            phone: information.phone,
            time: information.time,
            tagLine: information.tagLine,
            follow,
            product_detail
        }


        res.status(200).json({
            status: 200,
            data: responceData,
            message: 'store Information!!'
        })
    } catch (error) {
        next(error)
    }
}