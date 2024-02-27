const AddShippingAddress = require('../models/addShippingAddress')
const { isEmpty } = require('../utils/checkEmptyValue')
const authToken = require('../utils/generateAuth')
const { validMobileNumber } = require('../utils/validation')

exports.addShippingAddress = async(req, res, next) => {
    try {
        const {firstName, lastName, address, city, state, zip_code, mobileNumber} = req.body

        const isMobile = await AddShippingAddress.findOne({where : {mobileNumber}})

        if(isMobile){
            return res.status(400).json({
                status: 400,
                message: 'Mobile Number already register'
            })
        }

        isEmpty(firstName, 'firstName')
        isEmpty(lastName, 'lastName')
        isEmpty(address, 'address')
        isEmpty(city, 'city')
        isEmpty(state, 'state')
        isEmpty(zip_code, 'zip_code')

        // const number = validMobileNumber(mobileNumber)

        const user = await AddShippingAddress.create({
            firstName,
            lastName,
            address,
            city,
            state,
            zip_code,
            mobileNumber: validMobileNumber(mobileNumber)
        })

        // console.log(user.toJSON())

        const token = await authToken(user.userID)
        user.token = token
        await user.save()

        const userInfo = {
            userID: user.userID,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            city: user.city,
            state: user.state,
            zip_code: user.zip_code,
            mobileNumber: user.mobileNumber
        }

        res.status(200).json({
            status: 200,
            data: userInfo,
            token,
            message: 'Registration Successfully!'
        })
    } catch (error) {
        next(error)
    }
}