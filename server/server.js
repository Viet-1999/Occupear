const express = require('express');
const cors = require('cors');
const dbConfig = require('./app/config/db.config');
const jdConfiq = require('./app/config/jd.config');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const app_jb = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app_jb.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
app_jb.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app_jb.use(express.urlencoded({ extended: true }));
// app_jb.use(function (req, res, next) {
//   res.setHeader(
//     'Access-Control-Allow-Origin',
//     'http://localhost:3002/job/data'
//   );
// });
const db = require('./app/models');
const { application } = require('express');
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'App is working' });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/upload.routes')(app);
//upload

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//JD port
const PORT_JD = process.env.PORT || 3002;
app_jb.listen(PORT_JD, () => {
  MongoClient.connect(
    jdConfiq.url,
    { useNewUrlParser: true },
    (error, result) => {
      if (error) throw error;
      database = result.db(jdConfiq.DB);
      console.log('jd connection success');
    }
  );
});
//jd_routes
require('./app/routes/jd.routes')(app_jb);
//
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
