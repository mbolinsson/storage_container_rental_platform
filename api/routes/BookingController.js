const route = require("express").Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("es6-promise").polyfill();
require("isomorphic-fetch");
const token = process.env["RECAPTCHA_SERVER_KEY"];

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

  // reCAPTCHA validation "6Lfwob8ZAAAAAFf4nhXDJILOoywe5wvcV0TzCtFo"

  async function checkIfHuman() {
    const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY;
    const humanKey = req.body.captchaValue;
    try {
      const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `secret=${token}&response=${humanKey}`,
      })
        .then((res) => res.json())
        .then((json) => json.success)
        .catch((err) => {
          throw new Error(`Error in Google Siteverify API. ${err.message}`);
        });

      if (humanKey === null || !isHuman) {
        console.log(humanKey);
        throw new Error(`YOU ARE NOT A HUMAN.`);
      }

      // The code below will run only after the reCAPTCHA is succesfully validated.
      console.log("SUCCESS!");
    } catch (e) {
      console.log(e);
    }
  }

  checkIfHuman();

  res.status(200);
});

module.exports = route;
