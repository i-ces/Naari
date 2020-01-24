const cronjob = email => {
  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "bhawana.prs@gmail.com",
      pass: "*****"
    }
  });

  mailOptions = {
    from: "bhawana.prs@gmail.com",
    to: email,
    subject: "Alert for weekly health checkup",
    text:
      "Its been a week since you have been  to hospital . Please contact your doctor/gynaecologists"
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent");
    }
  });
};

module.exports = { cronjob: cronjob };
