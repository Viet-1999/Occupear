const express = require('express');

const router = express.Router();
const db = require('../models');
const JobModel = db.job;
const jdConfiq = require('../config/jd.config');
const { find } = require('../models/user.model');
var ObjectID = require('mongodb').ObjectID;
module.exports = function (app) {
  
  app.get('/', (req, res) => {
    res.json({ message: 'App is working' });
  });
  app.post('/job/upload', (req, res) => {
    const newJob = new JobModel({
      positionName: req.body.positionName,
      company: req.body.company,
      location: req.body.location,
      rating: req.body.rating,
      reviewCount: req.body.reviewCount,
      url: req.body.url,
      id: req.body.id,
      postAt: req.body.postAt,
      scrapedAt: req.body.scrapedAt,
      description: req.body.description,
    });
    newJob.save();
  });

  app.get('/job/data', (req, res) => {
    database
      .collection(jdConfiq.collection)
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
      });
  });

  app.get('/job/data/:_id', (req, res) => {
    const id = req.params._id;
    database
      .collection(jdConfiq.collection)
      .findOne({ id: id }, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
  });
  // app.get('/job/data/filter/:name', (req, res) => {
  //   const id = req.params.name;
  //   database
  //     .collection(jdConfiq.collection)
  //     .findOne({ positionName: { $regex: `${id}` } }, (err, result) => {
  //       if (err) throw err;
  //       res.send(result);
  //     });
  // });
};
