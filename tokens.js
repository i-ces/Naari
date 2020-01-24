module.exports = tokens = () => {
  require("dotenv").config();
  const accountSid = process.env.ACCOUNTSID;
  const auth = process.env.AUTH;
  const client = require("twilio")(accountSid, auth);
  return client;
};
