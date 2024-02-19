exports.isEmpty = (value, name) => {
    if(value === '' || null || undefined){
        throw new Error (`${name} should not be empty!`)
    }
    return value
}