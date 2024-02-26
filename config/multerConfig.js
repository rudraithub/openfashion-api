const multer = require('multer')
const cloudinary = require('./cloudinaryConfig');
const { CloudinaryStorage } = require('multer-storage-cloudinary')

// const storage = multer.memoryStorage({})
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Dashboard/image',
        allowedFormats: ['jpeg', 'png', 'jpg'],
        uniqueFilename: true,
    }
})

const upload = multer({
    storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)/)) {
            return cb(new Error('please upload an image'))
        }
        cb(undefined, true)
    }
});

module.exports = upload;
