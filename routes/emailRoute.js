const nodemailer = require("nodemailer");
// const xoauth2 = require("xoauth2");

module.exports = app => {
  app.post("/send", (req, res) => {
    console.log(req.body);
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
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "fastturtlemotors@gmail.com",
        pass: "fastturtlemotors123"
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: "FastTurtleMotors <fastturtlemotors@gmail.com>", // sender address
      to: "chrisvoss92@gmail.com", // list of receivers
      subject: "NodeMailer Test", // Subject line
      text: "Hello world!", // plain text body
      html: output // html body
    };

    // send mail with defined transport object
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

/*
type: 'OAuth2',
user: "fastturtlemotors@gmail.com",
clientId: "399914646482-4hqdr715mo2ht0in0ul0p8hsd0eeecr1.apps.googleusercontent.com",
clientSecret: "p9jZK5NXOvHIdAMd9zV8vGqB",
refreshToken: "1/HLMDN6C5s87Ou2u7Hj1N9m2ojhdWTRRAlNoUdoApMvw"
accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
expires: 1546814048
*/
