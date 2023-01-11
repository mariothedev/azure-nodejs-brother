const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");
require("dotenv").config();

app
  .use(bodyParser.json())
  .get("/", async (_, res) => {
    // Make a request for a user with a given ID
    axios
      .get("https://api.nationalize.io?name=mario")
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(new Date().toUTCString()));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })
  .get("/api", async (_, res) => {
    // Make a request for a user with a given ID
    axios
      .get("https://arriba-foundation.azurewebsites.net/api")
      .then(function (response) {
        // handle success
        res.send("response from sister: ", JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })
  .post("/webhook", async (_, res) => {
    axios
      .post(process.env.SLACK_URL, {
        text: `testing: please ignore ${new Date().toUTCString()}`,
      })
      .then(function (response) {
        // handle success
        res.send(JSON.stringify(new Date().toUTCString()));
      })
      .catch(function (error) {
        // handle error
        res.send(JSON.stringify(error));
      });
  })

  .listen(process.env.PORT || 3000);
