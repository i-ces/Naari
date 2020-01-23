var express = require("express");
var router = express.Router();
var HealthInfo = require("../models/HealthInfo");
var DoctorsInfo = require("../models/Doctors");

heightAndWeight = {
  137: [31.7, 3.2],
  140: [34.2, 3.4],
  142: [36.25, 3.65],
  145: [38.75, 3.38],
  147: [40.65, 4.01],
  150: [43.3, 4.3],
  152: [45.35, 4.55],
  155: [47.85, 4.75],
  157: [49.9, 5],
  160: [52.4, 5.2],
  163: [54.45, 5.45],
  165: [56.9, 5.7],
  168: [58.9, 5.9],
  170: [61.45, 6.15],
  173: [63.45, 6.35],
  178: [68, 6.8],
  180: [70.5, 7],
  183: [72.55, 7.25]
};

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.get("/recommendeddoctors", (req, res, next) => {
  specialists = {
    "Dr. Nutan Thakur Sharma": "Obsterician & Gyanaecologist",
    "Dr. Swasti Sharma": "Gynaecologist and fertility specialist",
    "Dr. Bal Krishna Shah": "Obs & Gynaecology",
    "Dr. Manor Din Shaiyed": "Obstetrics & Gynecologist",
    "Prof. Dr. Achala Vaidya": "Senior Consultant Gynecologist/Obstetrician",
    "Dr. Jyoti Agrawal": "Obstetrics and Gynecology",
    "Prof. Dr. Padam Raj Pant": "Obstetrics and Gynecologist",
    "Dr. Sabina Shrestha": "OBSTETRICIAN & GYNECOLOGIST",
    "Dr. Jitendra Pariyar": "Obsterician & Gyanaecologist",
    "Dr. Meenu Suwal": "Consultant Gynecologist & Obstetrician"
  };
  doctors = [
    "Dr. Nutan Thakur Sharma",
    "Dr. Swasti Sharma",
    "Dr. Bal Krishna Shah",
    "Dr. Manor Din Shaiyed",
    "Prof. Dr. Achala Vaidya",
    "Dr. Jyoti Agrawal",
    "Prof. Dr. Padam Raj Pant",
    "Dr. Sabina Shrestha",
    "Dr. Jitendra Pariyar",
    "Dr. Meenu Suwal"
  ];

  res.render("recommendedDoctors", { specialists, doctors });
});

router.get("/healthinfo", (req, res, next) => {
  res.render("healthinfo");
});
router.post("/healthinfo", (req, res, next) => {
  var healthinfo = new HealthInfo({
    pressure: req.body.pressure,
    weight: req.body.weight,
    feet: req.body.feet,
    inches: req.body.inches
  });
  var pressure = healthinfo.pressure;
  console.log(pressure);

  feet = healthinfo.feet;
  inches = healthinfo.inches;
  console.log(healthinfo);
  height = Math.round(feet * 30.48 + inches * 2.54);
  console.log(height);
  weight = healthinfo.weight;
  averageWeight = heightAndWeight[height][0];
  deviationOfWeight = heightAndWeight[height][1];
  console.log(`your height is ${height} `);
  console.log(
    `Average  weight for height of ${height} is ${averageWeight} but weight within range of ${averageWeight -
      deviationOfWeight} - ${averageWeight +
      deviationOfWeight} is considered normal `
  );
  healthyWeight = {
    pressure,
    height,
    weight,
    averageWeight,
    deviationOfWeight
  };
  if (weight - averageWeight > deviationOfWeight) {
    res.render("obesity", { healthyWeight: healthyWeight });
  } else if (Math.abs(weight - averageWeight) <= deviationOfWeight) {
    res.render("moderatePrecaution", { healthyWeight: healthyWeight });
  } else {
    res.render("lean", { healthyWeight: healthyWeight });
  }
});

router.post("/rankdoctors", (req, res) => {
  points = 0;
  var firstName = req.body.fname.toLowerCase();
  var lastName = req.body.lname.toLowerCase();
  var fullname = firstName + lastName;

  console.log(fullname);
  var doctor = new DoctorsInfo({
    fname: req.body.fname.toLowerCase(),
    lname: req.body.lname.toLowerCase(),
    speciality: req.body.speciality,
    fullname: fullname,
    points: points + 1
  });

  // if new recoomendation start point with one else incresase point accesing data from database
  // console.log(doctor);
  var promise = doctor.save();
  promise.then(doctors => {
    console.log(doctor);

    DoctorsInfo.findOne({ fullname: req.body.fullname }).then((err, doctor) => {
      console.log("Repeated");
      console.log(doctors);
    });
  });
});

module.exports = router;
