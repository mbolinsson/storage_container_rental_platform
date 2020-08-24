const nodemailer = require("nodemailer");

module.exports.mailSender = async function mailSender(req) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FORMSENDER_MAIL,
        pass: process.env.FORMSENDER_MAIL_PASS,
      },
    });

    const customer = req.body.customer;
    const container = req.body.container;

    let info = await transporter.sendMail({
      from: '"kundförfrågan container" <process.env.FORMSENDER_MAIL>',
      to: process.env.SB_HOLDING_MAIL,
      subject: `Kundförfrågan om ${req.body.container.type} från ${req.body.customer.fornamn} ${req.body.customer.efternamn}`,
      text: req.body.fornamn,
      html: `
      <h3>En person med dessa uppgifter:</h3>
      <ul>
      <li>${customer.fornamn}</li>
      <li>${customer.efternamn}</li>
      <li>${customer.personnummer}</li>
      <li>${customer.email}</li>
      <li>${customer.telefonnummer}</li>
      <li>${customer.stad}</li>
      <li>${customer.gatuAdress}</li>
      <li>${customer.postnummer}</li>
      </ul>
      <h3>Har ansökt om att få hyra följande ${container.type}</h3>
      <ul>
      <li>${container.location}</li>
      <li>${container.number}</li>
      <li>${container.type}</li>
      <li>${container.m2}</li>
      <li>${container.price}</li>
      </ul>
      <a href="https://www.upplysning.se/person/?x=1400&who=${customer.fornamn}+${customer.efternamn}&where=${customer.stad}&m=1" >Gör en kreditupplysning på ${customer.fornamn}</a>
      `,
    });

    console.log("Message sent: %s", info.messageId);
  } catch {
    console.log(console.error);
  }
};
