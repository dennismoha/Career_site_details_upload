// exports.userSignupValidator = (req, res, next) => {
//     req.check("first_name", "Name is required").notEmpty().trim().escape();
//     req.check("last_name", "Last name is required").notEmpty().trim().escape();
//     req
//         .check("reg_num", "Registration number is required")
//         .notEmpty()
//         .trim()
//         .escape();
//     req.check("campus", "Campus name is required").notEmpty().trim().escape();
//     req.check("college", "college name is required").notEmpty().trim().escape();
//     req.check("discipline", "discipline is required").notEmpty().trim().escape();
//     req.check("gender", "Gender is required").notEmpty().trim().escape();
//     req
//         .check("enroll_date", "date of enrollment is required")
//         .notEmpty()
//         .trim()
//         .escape();
//     req.check("age", "Age is required").notEmpty().trim().escape();
//     req
//         .check("finish_date", "date of completion is required")
//         .notEmpty()
//         .trim()
//         .escape();
//     req
//         .check("Email", "Email must be between 3 to 32 characters")
//         .matches(/.+\@.+\..+/)
//         .withMessage("Email must contain @")
//         .isLength({
//             min: 5,
//             max: 32,
//         });
//     req.check("password", "Password is required").notEmpty().trim();
//     req
//         .check("password")
//         .isLength({ min: 6 })
//         .withMessage("Password must contain at least 6 characters")
//         .matches(/\d/)
//         .withMessage("Password must contain a number");
//     req
//         .check("confirm_password")
//         .isLength({ min: 6 })
//         .withMessage("confirm_Password must contain at least 6 characters")
//         .matches(/\d/)
//         .withMessage("Password must contain a number");
//     req
//         .assert("confirm_password", "Passwords do not match")
//         .equals(req.body.password);
//     const errors = req.validationErrors();
//     if (errors) {
//         console.log(errors);
//         const firstError = errors.map((error) => error.msg)[0];
//         return res.status(400).json({ error: firstError });
//     }
//     next();
// };

exports.userSignupValidator = (req, res, next) => {

    req
        .check("reg_num", "Registration number is required")
        .notEmpty()
        .trim()
        .escape();
    req
        .check("Email", "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 5,
            max: 32,
        });
    req.check("password", "Password is required").notEmpty().trim();
    req
        .check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    req
        .check("confirm_password")
        .isLength({ min: 6 })
        .withMessage("confirm_Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    req
        .assert("confirm_password", "Passwords do not match")
        .equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

exports.AdminSignupValidator = (req, res, next) => {

    req
        .check("Email", "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 5,
            max: 32,
        });
    req.check("password", "Password is required").notEmpty().trim();
    req
        .check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    req
        .check("confirm_password")
        .isLength({ min: 6 })
        .withMessage("confirm_Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    req
        .assert("confirm_password", "Passwords do not match")
        .equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};


exports.userLoginValidator = (req, res, next) => {
    req
        .check("Email", "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 5,
            max: 32,
        });
    req.check("password", "Password is required").notEmpty().trim();
    req
        .check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    const errors = req.validationErrors();
    if (errors) {
        console.log("login errors", errors);
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};

// "email": "",
// "password": "",
// "confirm_password": "",
// "first_name": "",
// "last_name": "",
// " reg_num": "",
// "campus": "",
// " college": "",
// " course": "",
// " discipline": "",
// " gender": "",
// " age": "",
// " enroll_date": "",
// " finish_date": "",
// " role": ""