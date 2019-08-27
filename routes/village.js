/* Xã phường */
var express = require("express");
var router = express.Router();

router.get("/:districtId", (req, res) => {
  let { districtId } = req.params;
  let villages = require(`../data/xa-phuong/${districtId}.json`);
  return res.json(villages);
});

module.exports = router;
