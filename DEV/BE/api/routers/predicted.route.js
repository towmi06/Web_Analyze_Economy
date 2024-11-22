const express = require('express');
const router = express.Router();

const dataPredicted = require("../controller/predicted.controller");

router.get("/", dataPredicted.index);

module.exports = router;