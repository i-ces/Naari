const sms = phoneNumber => {
  const tokens = require("./tokens");
  client = tokens();
  client.messages
    .create({
      body:
        " हामी प्रत्येक महिलालाई  गर्भावस्थाको हरेक चरणमा सही जानकारी प्रदान गरेर सुरक्षित महसुस गराउँछौं",
      to: "+9779864420261",
      from: process.env.FROM
    })
    .then(message => console.log(message))
    .catch(err => {
      console.log(err);
    });
};
module.exports = {
  sms: sms
};
