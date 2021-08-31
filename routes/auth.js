/*
    THIS IS FILE CONSISTS OF USER SIGNUP AND LOGIN ROUTES.
*/
var express = require("express");
const User = require("../controller/auth");
const {
    userSignupValidator,
    userLoginValidator,
} = require("../validator/validator");
const auth = require("../config/authToken");
var router = express.Router();

// user register
router.post("/register", userSignupValidator, User.createUser);

// login user
router.post("/login", userLoginValidator, User.userLogin);
// @RULE:  Get a single user after login
router.get("/user/", auth, User.singleUser);
// user login

module.exports = router;