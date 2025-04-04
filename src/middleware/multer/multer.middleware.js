const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, '../../temp'));

    },

    filename: function (req, file, cb) {

        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }
});

const multerUpload = multer({

    storage: storage,

    limits: { fileSize: 5000000 }, // 5MB limit

    fileFilter: function (req, file, cb) {

        checkFileType(file, cb);
    }

}).array('files', 10);

function checkFileType(file, cb) {

    const filetypes = /jpeg|jpg|png|gif|avif/;

    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

module.exports = multerUpload;
