const mongoose = require('mongoose');

module.exports = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopoligy: true,
    };
    await mongoose.connect("mongodb://localhost:27017/userDB", connectionParams);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
    console.log('Could not connect to database');
  }
};
