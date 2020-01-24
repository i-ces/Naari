const tokens = require("./tokens");
client = tokens();
client.messages
  .create({
    body:
      "This website stores cookies on your computer If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.",
    from: process.env.FROM,
    to: process.env.TO
  })
  .then(message => console.log(message))
  .catch(err => {
    console.log(err);
  });
