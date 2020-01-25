const nodemailer = (email, query) => {
  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "bhawana.prs@gmail.com",
      pass: ""
    }
  });

  mailOptions = {
    from: "bhawana.prs@gmail.com",
    to: "shivagaihre40@gmail.com",
    subject: "Alert for weekly health checkup",
    // text: query
    html: `
    <div>
      <h1>${query}</h1>
      <a href="192.168.1.176:4000/post-ans">View question</a>

      
    </div>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent");
    }
  });
};

module.exports = nodemailer;
