const ProductDetails = require('../models/productDetails')


exports.addProductDetails = async (req, res) => {
    try {
        const title = req.body.title

        if (!req.file) {
            throw new Error('please upload an image')
        }

        console.log(req.file)
        const imageURL = req.file.path

        const follow = new ProductDetails({
            image: imageURL,
            title
        })

        await follow.save()
        res.status(201).json({
            status: 201,
            data: follow,
            message: "success!"
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}