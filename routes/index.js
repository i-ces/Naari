var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var app = express();

var HealthInfo = require("../models/HealthInfo");

mongoose.connect("mongodb://localhost/codecampwrc");

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/healthinfo", (req, res, next) => {
  res.render("healthinfo");
});
router.post("/healthinfo", (req, res) => {});

app.listen(4000, function(req, res) {
  console.log("server connected for code camp 2019");
});

module.exports = router;
