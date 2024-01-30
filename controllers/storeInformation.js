const Follow = require('../models/follow')
const ProductDetails = require('../models/productDetails')
const StoreInfo = require('../models/storeInformation')

exports.addStoreInformation = async (req, res) => {
    try {
        const {email, phone, time, tagLine} = req.body

        const information = new StoreInfo({
            email,
            phone,
            time,
            tagLine
        })

        await information.save()

        res.status(201).json({
            status: 201,
            message: 'Store Information Saved'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}


exports.getStoreInformation = async (req, res) => {
    try {
        const information = await StoreInfo.findOne({})
        if(!information){
            return res.status(400).json({
                status: 400,
                message: 'no details found!'
            })
        }

        const follow = await Follow.find()
        const product_detail = await ProductDetails.find()

        // const responceData = {
        //     email: information.email,
        //     phone: information.phone,
        //     time: information.time,
        //     tagLine: information.tagLine,
        //     follow,
        //     product_detail
        // }


        res.status(200).json({
            status: 200,
            data: {
                ...information.toObject(),
                follow,
                product_detail
            },
            message: 'store Information!!'
        })
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}