const ProductDetails = require('../models/productDetails')
const { isEmpty } = require('../utils/checkEmptyValue')


exports.addProductDetails = async (req, res, next) => {
    try {
        const title = req.body.title

        if (!req.file) {
            throw new Error('please upload an image')
        }

        // console.log(req.file)
        const imageURL = req.file.path

        isEmpty(title, 'title')

        if(!isNaN(title)){
            throw new Error ('Title should be a character')
        }

        const follow = ProductDetails.build({
            image: imageURL,
            title
        })

        await follow.save()
        res.status(200).json({
            status: 200,
            data: follow,
            message: "success!"
        })
    } catch (error) {
        next(error)
    }
}