const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../config/db");
const auth = require("../Helper/AuthHelper");

exports.login = (req, res, Email, password, sql) => {
    console.log("reache dhered", password);
    db.execute(sql, [Email])
        .then(([user, rowdata]) => {
            console.log("user is ", user);
            if (user.length !== 0) {
                bcrypt
                    .compare(password, user[0].Password || user[0].password)
                    .then((isEqual) => {
                        if (!isEqual) {
                            return res
                                .status(401)
                                .json({ message: "email or password is incorrect" });
                        }
                        const userId = user[0].Email;
                        const { role } = user[0];
                        const token = jwt.sign({ userId, role },
                            `${process.env.SECRET}`, {
                                expiresIn: "1h",
                            }
                        );
                        return res.status(200).json({ token, userId, role });
                    });
            } else {
                return res.status(404).json({ message: "email or password incorrect" });
            }
            return null;
        })
        .catch((error) => {
            console.log("login error", error);
            res.status(500).json({ error: "server error", msg: error });
        });
};

exports.signUp = async(req, res, sql) => {
    const { checkUser, registerUser, quer, querBody } = sql;
    let { password } = querBody
    console.log(querBody)
    try {
        conn = await db.getConnection();
        const [results] = await conn.execute(
            checkUser, [...quer]
        );
        console.log("results :", results);
        if (results.length !== 0) {
            return res.status(400).json({ message: "user exists" });
        }
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        querBody.password = password
        const passBody = Object.values(querBody);
        console.log('passbody ', passBody)
        const [data] = await db.execute(registerUser, [
            ...passBody
        ]);

        res.status(200).json({ message: "success" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "error Singup", error });
    }
}