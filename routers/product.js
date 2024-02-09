const express = require('express')
const upload = require('../config/multerConfig')
const { addProduct } = require('../controllers/product')

const productRouter = express.Router()


productRouter.post('/addProduct', upload.single('display_image'), upload.array('product_image'), addProduct)

module.exports = productRouter