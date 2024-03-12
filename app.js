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
const cors = require('cors')
const sequelize = require('./config/dbconnect')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/health', async (req, res) => {
    try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
  await sequelize.sync()
  console.log('All models synchronized successfully.')
  res.status(200).json({
    status: 200,
    message: 'Connection has been established successfully.'
  })
} catch (error) {
    res.status(400).json({
        status: 400,
        message: `Unable to connect to the database: ${error.message}`
    })
//   console.error('Unable to connect to the database:', error.message)
}
})

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