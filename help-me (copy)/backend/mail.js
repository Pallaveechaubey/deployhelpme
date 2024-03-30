const nodemailer = require("nodemailer");

async function sendMail(formData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pallaveechaubey11@gmail.com",
      pass: "cegsdkncovrouoal",
    },
  });

  const mailOptions = {
    from: "pallaveechaubey11@gmail.com",
    // to: "pallavee.x.chaubey@fosteringlinux.com",
    to:formData.recipient,
    subject: "Help Me testing",
    text: `Hloo ${formData.name} this side my email is  ${formData.email}, Please help  me regarding this ${formData.message}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("email sent");
  } catch (error) {
    console.log(error);
  }
}
module.exports = sendMail;
