/*
    THIS IS FILE CONSISTS OF ADMIN SIGNUP AND LOGIN ROUTES.
*/
var express = require("express");
const User = require("../../controller/Admins/Auth");
const {
    AdminSignupValidator,
    userLoginValidator,
} = require("../../validator/validator");
// const auth = require("../config/authToken");
var router = express.Router();

// user register
router.post("/register", AdminSignupValidator, User.createAdmin);

// login user
router.post("/login", User.AdminLogin);
// @RULE:  Get a single user after login
// router.get("/user/", User.singleUser);
// user login

module.exports = router;