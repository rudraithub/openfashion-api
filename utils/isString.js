exports.isString = (...values) => {
    values.forEach((value) => {
        if(typeof value !== 'string') throw new Error ('please provide Correct value')
    })
}

exports.isAlphabetic = (...values) => {
    values.forEach((value) => {
        if(!value.match(/^[a-zA-Z]+$/)) throw new Error ('please provide only alphabetic characters')
    })
}
