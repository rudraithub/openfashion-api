const Product = require('../models/product')

exports.addProduct = async (req, res) => {
    try {
        const {product_name, product_detail, product_price, product_discount } = req.body

        if(!req.file){
            throw new Error("please upload an image")
        }

        console.log(req.body)
        console.log(req.files)
        const displayImage = req.file.path
        console.log(displayImage)
        const productImages = req.files.map(file => file.path)
        console.log(productImages)

        const productData = new Product({
            display_image: displayImage,
            product_name,
            product_detail,
            product_discount,
            product_price,
            product_image: productImages,
        })

        console.log(productData)

        res.send(productData)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
}