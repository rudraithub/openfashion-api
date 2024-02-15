const jwt = require('jsonwebtoken')
const AddShippingAddress = require('../models/addShippingAddress')

const authToken = async (userID) => {
  try {
    const user = await AddShippingAddress.findOne({ where: { userID } })
    if (!user) {
      throw new Error('You are not register yet, please signup!')
    }
    const token = jwt.sign({ id : user.userID }, 'rudraIthubfotquizbook')
    // user.tokens = user.tokens.concat({ token })
    // user.token = token

    // // console.log(user.token)

    // await user.save()

    return token
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = authToken
