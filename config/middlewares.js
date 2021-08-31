exports.checkRole = (req, res, next) => {
    if (req.role !== "admin") {
        return res.status(403).json({ message: "forbidden" });
    }
    return next();
};