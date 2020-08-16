const route = require("express").Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

route.post("/", (req, res) => {
  async function mailMan() {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sbholding.formsender@gmail.com",
        pass: "Firman567345",
      },
    });

    const customer = req.body.customer;
    const container = req.body.container;

    let info = await transporter.sendMail({
      from: '"kundförfrågan container" <sbholding.formsender@gmail.com>',
      to: "sbholding.fast@gmail.com",
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
  }

  mailMan().catch(console.error);

  const formInfo = req.body;
  res.status(200);
  console.log(formInfo);
});

module.exports = route;
