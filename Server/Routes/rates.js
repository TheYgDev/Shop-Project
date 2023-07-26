const express = require("express");
const router = express.Router();

const url = "https://exchangerate-api.p.rapidapi.com/rapid/latest/USD";
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0a9656cd65msh88d2dd5fde70efbp1d739ajsn58d18d7cda5d",
      "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    },
  };
router.get("/:to", async (req, res) => {
    let to = req.params.to.toUpperCase();
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const rate = result.rates[to];
      res.end(JSON.stringify(rate))
  } catch (error) {
      res.sendStatus(500);
  }
});
router.get("/", async (req, res) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const rate = result.rates;
      res.end(JSON.stringify(rate))
  } catch (error) {
      res.sendStatus(500);
  }
});

module.exports = router;
