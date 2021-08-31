/*
    THIS IS CONSISTS OF  JWT AUTHENTICATION TOKEN
*/
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
        return res.status(403).json({ message: "Not Authenticated" });
    }
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.SECRET);
    } catch (err) {
        err.status = 500;
        throw err;
    }
    if (!decodedToken) {
        return res.status(403).json({ message: "Not Authenticated" });
    }
    req.userId = decodedToken.userId;
    next();
};