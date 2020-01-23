var mongoose = require("mongoose");

const DoctorsSchema = mongoose.Schema({
  fname: String,
  lname: String,
  speciality: String,
  fullname: String,
  points: Number,
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("DoctorsInfo", DoctorsSchema);
