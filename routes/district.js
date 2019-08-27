/* Quận huyện */
var express = require("express");
var router = express.Router();

router.get("/:cityId", (req, res) => {
  let { cityId } = req.params;
  let districts = require(`../data/quan-huyen/${cityId}.json`);
  return res.json(districts);
});

module.exports = router;
