var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/codecampwrc");

router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

app.listen(3000, function(req, res) {
  console.log("server connected for code camp");
});
module.exports = router;
