const mongoose = require("mongoose");

function connectDb(){
mongoose
  .connect("mongodb://127.0.0.1:27017/lms_record", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log(`Couldn't connect to MongoDB, ${error}`));
}

module.exports = connectDb()