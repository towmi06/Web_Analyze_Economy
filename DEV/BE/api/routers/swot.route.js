const express = require('express');
const router = express.Router();

const dataSwot = require("../controller/swot.controller");

router.get("/", dataSwot.index);

module.exports = router;