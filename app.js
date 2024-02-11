require('dotenv').config()
const express = require('express')
const dashboardRouter = require('./routers/dashboard')
const storeInformationRouter = require('./routers/storeInformation')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')
const addToCartRouter = require('./routers/addToCart')
const app = express()
require('./config/dbconnect')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(dashboardRouter)
app.use(storeInformationRouter)
app.use(categoryRouter)
app.use(productRouter)
app.use(addToCartRouter)

app.listen(PORT, () => {
    console.log(`server runnining on port ${PORT}`)
})