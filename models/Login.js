var mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  phone: Number,
  password: String,

  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);
