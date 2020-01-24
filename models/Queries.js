var mongoose = require("mongoose");

const QuerySchema = mongoose.Schema({
  username: String,
  query: String,
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("QueryInfo", QuerySchema);
