var express = require("express");
var router = express.Router();

router.use("/city", require("./city"));
router.use("/district", require("./district"));
router.use("/village", require("./village"));

module.exports = router;
