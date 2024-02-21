require('dotenv').config()
const express = require('express')
const dashboardRouter = require('./routers/dashboard')
const storeInformationRouter = require('./routers/storeInformation')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')
const addToCartRouter = require('./routers/addToCart')
const shippingRouter = require('./routers/addShippingAddress')
const orderRouter = require('./routers/placeOrder')
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
app.use(shippingRouter)
app.use(orderRouter)

app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 400;
    error.status = error.status || "Error";
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
    });
});

app.listen(PORT, () => {
    console.log(`server runnining on port ${PORT}`)
})