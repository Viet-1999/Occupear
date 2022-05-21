const upload = require('../middlewares/upload');
const express = require('express');
const connection = require('./db');
const Grid = require('gridfs-stream');
const { mongoose } = require('mongoose');
const router = express.Router();
//router api của upload

connection();
let gfs;
const conn = mongoose.connection;
conn.once('open', function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('photos');
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'photos',
  });
});

let routes = (app) => {
  router.post('/upload', upload.single('file'), (req, res) => {
    if (req.file == undefined) return res.send('you must selct a file.');
    // const imgURl = `http://localhost:3000/file/${req.file.filename}`;
    // return res.send(imgURl);
  });
  router.get(
    '/file/:filename',
    async (req, res) => {
      try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
      } catch (error) {
        console.log(error);
        res.send('err');
      }
    },
    express.static('/file/:filename')
  );
  router.delete('/file/:filename', async (req, res) => {
    try {
      await gfs.files.deleteOne({ filename: req.params.filename });
      res.send('success');
    } catch (error) {
      console.log(error);
      res.send('An error occur');
    }
  });
  return app.use('/', router);
};
module.exports = routes;
