const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

/**
 * USER REGISTRATION AND LOGIN
 */
router.post('/', userController.userCreate);
router.post('/signIn', userController.signIn);

module.exports = router;