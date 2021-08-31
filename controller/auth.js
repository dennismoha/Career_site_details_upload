/*
    THIS IS FILE CONSISTS OF USER SIGNUP AND LOGIN LOGIC.
*/
/* eslint-disable no-unused-vars */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const auth = require('./Helper/AuthHelper')

// @RULE: REGISTER STUDENTS

exports.createUser = async(req, res, next) => {
    let { Email, reg_num, password } = req.body;
    console.log('req body is ', req.body)
    delete req.body.confirm_password
    const sql = {
        checkUser: "select Email,reg_num from student_auth WHERE Email = ? or reg_num = ?",
        quer: [req.body.Email, req.body.reg_num],
        registerUser: "call career.studentRegisters(?, ?,?)",
        querBody: req.body,
    };

    return auth.signUp(req, res, sql);
};

// @LOGIN
exports.userLogin = (req, res, next) => {
    let sql = "SELECT * from students WHERE Email = ?";
    const { Email } = req.body;
    const { password } = req.body;
    console.log("req body:", req.body);
    return auth.login(req, res, Email, password, sql);
}


// @RULE : FETCH A SINGLE USER
exports.singleUser = (req, res, next) => {
    const userIds = req.userId;
    console.log("userID :", req.userId);

    db.execute(
            "call career.singleUser(?, @fname, @last_names, @Emails, @reg_nums, @campuss, @colleges, @courses, @disciplines, @genders, @ages, @enroll_dates, @finish_dates)", [userIds]
        )
        .then((user) => {
            return res.json(user[0][0][0]);
        })
        .catch((error) => {
            console.log("login error", error);
            res.status(500).json({ error: "server error", msg: error });
        });
};