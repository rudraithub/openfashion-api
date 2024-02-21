const Product = require('../models/product')
const category = require('../models/categories')
const ProductImage = require('../models/productImages')
const { isEmpty } = require('../utils/checkEmptyValue')

exports.addProducts = async (req, res, next) => {
    try {

        if(!req.file){
            throw new Error('please upload an image')
        }

        const {categoryID, product_name, product_detail, product_price, product_discount } = req.body

        const categoryItem = await category.findOne({where: {categoryID}})

        if(!categoryItem){
            return res.status(400).json({
                status: 400,
                message: 'No Category Found!'
            })
        }

        isEmpty(product_name, 'product_name')
        isEmpty(product_detail, 'product_detail')
        isEmpty(product_price, 'product_price')
        isEmpty(product_discount, 'product_discount')

        // console.log(req.file)
        const image = req.file.path
        // console.log(req.files)

        const productData = Product.build({
            display_image: image,
            product_name,
            product_detail,
            product_discount,
            product_price,
            categoryID,
        })

        await productData.save()

        res.status(200).json({
            status: 200,
            data: productData,
            message: 'Product added!!'
        })

    } catch (error) {
        next(error)
    }
}

exports.addImagetoProduct = async (req, res, next) => {
    try {
        if(!req.files || req.files.length === 0){
            throw new Error('please uplaod an images')
        }

        const { productID } = req.body

        const product = await Product.findOne({where : {id: productID}})
        if(!product){
            throw new Error('product is not found!')
        }

        // console.log(req.files)
        const images = req.files.map(file => file.path)
        // console.log(images)
        const productImages = images.map(image => ({
            productID,
            product_image: image
        }))

        const productAllImage = await ProductImage.bulkCreate(productImages)

        console.log(productAllImage)
        res.status(200).json({
            status: 200,
            data: productAllImage,
            message: 'image has been upload'
        })

    } catch (error) {
        next(error)
    }    
}