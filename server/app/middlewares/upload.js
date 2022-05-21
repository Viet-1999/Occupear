const util = require('util');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const dbConfig = require('../config/db.config');
var storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/userDB',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg'];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${file.originalname}`;
      return filename;
    }
    return {
      bucketName: 'photos',
      filename: `${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
