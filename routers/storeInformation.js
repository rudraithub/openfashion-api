const express =require('express')
const { addStoreInformation, getStoreInformation } = require('../controllers/storeInformation')
const { addFollow } = require('../controllers/follow')
const { addProductDetails } = require('../controllers/productDetails')
const upload = require('../config/multerConfig')

const storeInformationRouter = express.Router()

storeInformationRouter.post('/addProductDetails',upload.single('image'), addProductDetails)
storeInformationRouter.post('/addFollow',upload.single('image'), addFollow)
storeInformationRouter.post('/addStoreDetials', addStoreInformation)
storeInformationRouter.get('/store-information', getStoreInformation)

module.exports = storeInformationRouter