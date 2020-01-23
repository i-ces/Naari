var mongoose = require("mongoose");

const HealthInfoSchema = mongoose.Schema({
  pressure: String,
  weight: Number,
  feet: Number,
  inches: Number,
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("HealthInfo", HealthInfoSchema);
