const express = require("express");
const app = express();
const port = process.env.port || 3400;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const serverUri = "http://localhost:" + port;
const mongoUri = "mongodb+srv://Marcus:sewdsewd77@containerplatformcluste.kahvs.mongodb.net/Container-Platform-DB?retryWrites=true&w=majority";

app.listen(port, () => console.log("listening on" + serverUri));

mongoose
  .set("useCreateIndex", true)
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("THE SERVER IS RUNNING"))
  .catch((error) => console.log(error));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With, location");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
  }
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/containers", require("./routes/ContainerController"));
app.use("/api/booking", require("./routes/BookingController"));
