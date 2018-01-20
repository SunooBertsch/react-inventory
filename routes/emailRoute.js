const nodemailer = require("nodemailer");
const keys = require("../config/keys");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: keys.email,
    pass: keys.emailPassword
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = app => {
  app.post("/loan", (req, res) => {
    const output = `
    <p>You have a new customer!</p>
    <h3>Contact Details<h3>
    <ul>
      <li>Name: ${req.body.firstName}</li>
      <li>Email: ${req.body.lastName}</li>
      <li>Cell: ${req.body.cellPhone}</li>
    </ul>
    `;

    let mailOptions = {
      from: "FastTurtleMotors <fastturtlemotors@gmail.com>",
      to: "info@fastturtlemotors.com",
      subject: "Customer Contact Info",
      html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.redirect("..");
    });
  });

  app.post("/send", (req, res) => {
    const output = `
    <p>You have a new customer!</p>
    <h3>Contact Details<h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    let mailOptions = {
      from: "FastTurtleMotors <fastturtlemotors@gmail.com>",
      to: "info@fastturtlemotors.com",
      subject: "Customer Contact Info",
      html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      res.redirect("..");
    });
  });
};
