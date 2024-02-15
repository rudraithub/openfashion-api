const validator = require('validator')

exports.validMobileNumber = (number) => {
    if (!validator.isMobilePhone(number, 'en-IN', { strictMode: false })) {
        throw new Error('please provide valid mobile number')
    }
    return number
}