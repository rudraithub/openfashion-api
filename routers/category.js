const express = require('express')
const { addCategory, allCategory } = require('../controllers/category')

const categoryRouter = express.Router()

categoryRouter.post('/addcategory', addCategory)
categoryRouter.get('/category', allCategory)

module.exports = categoryRouter