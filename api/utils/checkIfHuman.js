require("es6-promise").polyfill();
require("isomorphic-fetch");

// recaptcha validation
module.exports.checkIfHuman = async function checkIfHuman(req) {
  const humanKey = req.body.captchaValue;
  try {
    const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${humanKey}`,
    })
      .then((res) => res.json())
      .then((json) => json.success)
      .catch((err) => {
        throw new Error(`Error in Google Siteverify API. ${err.message}`);
      });

    if (humanKey === null || !isHuman) {
      throw new Error(`YOU ARE NOT A HUMAN.`);
    }

    console.log("SUCCESS!");
    return true;
  } catch (e) {
    console.log(e);
  }
};
