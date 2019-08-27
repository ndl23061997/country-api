/* Thành phố */
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  let cities = require("../data/tinh_tp.json");
  return res.json(cities);
});

module.exports = router;
