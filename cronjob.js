const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "bhawana.prs@gmail.com",
    pass: "****"
  }
});

mailOptions = {
  from: "bhawana.prs@gmail.com",
  to: "bhawana.prs@gmail.com",
  subject: "Alert for weekly health checkup",
  text:
<<<<<<< HEAD
    "Its been a week since you have been  to hospital . Please contact your doctor/gynaecologists"
=======
    "Its been a week since you have to hospital . Please contact your doctor/gynaecologists"
>>>>>>> b977db2540d17da1f6416a0af37b395ce3a68622
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("email sent");
  }
});
