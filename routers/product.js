const express = require('express')
const upload = require('../config/multerConfig')
const { addProducts, addImagetoProduct } = require('../controllers/product')

const productRouter = express.Router()

productRouter.post('/addProduct', upload.single('display_image'), addProducts)
productRouter.post('/addImages', upload.array('product_image'), addImagetoProduct)
module.exports = productRouter