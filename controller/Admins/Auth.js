/*
    THIS COMPONENT CONSISTS OF THE ADMIN SIGNUP AND LOGIN LOGIC
*/
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../config/db");
const auth = require('../Helper/AuthHelper')


// @RULE: create admin

exports.createAdmin = async(req, res, next) => {

    delete req.body.confirm_password;
    const sql = {
        checkUser: `select Email from admins WHERE Email = ?`,
        quer: [req.body.Email],
        registerUser: "call career.AdminsRegister(?, ?)",
        querBody: req.body
    };
    return auth.signUp(req, res, sql)
};

/*
    @RULE: ADMIN LOGIN
*/


exports.AdminLogin = (req, res, next) => {
    let sql = "SELECT * from Admins WHERE Email = ?";
    const { Email } = req.body;
    const { password } = req.body;
    console.log('req body:', req.body)
    return auth.login(req, res, Email, password, sql)

};