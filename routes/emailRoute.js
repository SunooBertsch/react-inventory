const nodemailer = require('nodemailer')

app.post("/send", (req, res) => {
  const output = `

  `
  let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          xoauth2: xoauth2.createXOAuth2Generator({
            user: 'fastturtlemotors@gmail.com',
            clientId: "399914646482-4hqdr715mo2ht0in0ul0p8hsd0eeecr1.apps.googleusercontent.com",
            clientSecret: "p9jZK5NXOvHIdAMd9zV8vGqB",
            refreshToken: "1/HLMDN6C5s87Ou2u7Hj1N9m2ojhdWTRRAlNoUdoApMvw"
          })
        }
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: "FastTurtleMotors <fastturtlemotors@gmail.com", // sender address
        to: 'chrisvoss92@gmail.com', // list of receivers
        subject: 'NodeMailer Test', // Subject line
        text: 'Hello world!', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
})
