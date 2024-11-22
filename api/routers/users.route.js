const express = require('express');
const router = express.Router();

const users = require("../controller/user.controller");
router.post("/register", users.register);
router.post("/login", users.login);
router.post("/change", users.change);

module.exports = router;