const express = require('express')
const { createDashboard, getHomeImage } = require('../controllers/dashboard')
const upload = require('../config/multerConfig')

const dashboardRouter = express.Router()

dashboardRouter.post('/dashboard', upload.single('image'), createDashboard)
dashboardRouter.get('/homepage', getHomeImage)

module.exports = dashboardRouter