const jwt = require('jsonwebtoken')

const AddShippingAddress = require('../models/addShippingAddress')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    // console.log(token)
    const decode = jwt.verify(token, 'rudraIthubfotquizbook')
    // console.log(decode)
    // const user = await User.findOne({ _id: decode.id, 'tokens.token': token })
    const user = await AddShippingAddress.findOne({ where: { orderID: decode.id, token: token } })

    if (!user || !user.token) {
      return res.status(400).json({
        message: 'user not found'
      })
    }

    // console.log(user)
    req.user = user
    req.token = token
    next()
  } catch (error) {
    res.status(401).json({
      status: 401,
      message: 'unauthorized!'
    })
  }
}

module.exports = auth
