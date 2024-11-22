const express = require('express');
const router = express.Router();

const data = require("../controller/data.controller");

router.get("/", data.index);
router.get("/numOf", data.numberOf);
router.get("/rateSmartCre", data.rateSmartCre);
router.get("/ecogrow", data.ecogrow);
router.get("/refunfor", data.refunfor);
router.get("/selectCountry", data.selectCountry);
router.get("/selectYear", data.selectYear);
router.get("/dataCountry", data.dataCountry);
router.patch("/update/:id", data.upDate);

module.exports = router;