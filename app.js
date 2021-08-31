var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
const dotenv = require("dotenv").config();
const expressValidator = require("express-validator");

var AdminRouter = require("./routes/Admin/Auth");
var authRouter = require("./routes/auth");

var app = express();

/*  To avoid Cors errors */
app.use((req, res, next) => {
    console.log(res.Header);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/Admin/Auth", AdminRouter);
app.use("/api/auth", authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get("env") === "development" ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render("error");
// });

// module.exports = app;

app.listen(process.env.PORT || 8000, (err) => {
    {
        err
            ?
            console.log("error server starting ", err) :
            console.log("server up successfully");
    }
});