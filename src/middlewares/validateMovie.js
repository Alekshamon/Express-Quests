const validateMovie = (req, res, next) => {
  const { title, director, year, color, duration } = req.body;
  const errors = [];

  if (title == null) {
    errors.push({ field: "title", message: "This field is required" });
  } else if (title.length >= 255) {
    errors.push({
      field: "title",
      message: "Should contain less than 255 characters",
    });
  }
  if (director == null) {
    errors.push({ field: "director", message: "This field is required" });
  }
  if (year == null) {
    errors.push({ field: "year", message: "This field is required" });
  }
  if (color == null) {
    errors.push({ field: "color", message: "This field is required" });
  }
  if (duration == null) {
    errors.push({ field: "duration", message: "This field is required" });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

//avec le package "joi"
// const Joi = require("joi");

// const userSchema = Joi.object({
//   email: Joi.string().email().max(255).required(),
//   firstname: Joi.string().max(255).required(),
//   lastname: Joi.string().max(255).required(),
// });

// const validateUser = (req, res, next) => {
//   const { firstname, lastname, email } = req.body;

//   const { error } = userSchema.validate(
//     { firstname, lastname, email },
//     { abortEarly: false }
//   );

//   if (error) {
//     res.status(422).json({ validationErrors: error.details });
//   } else {
//     next();
//   }
// };

//package express-validator
// const { body, validationResult } = require("express-validator");

// const validateUser = [
//   body("email").isEmail(),
//   body("firstname").isLength({ max: 255 }),
//   body("lastname").isLength({ max: 255 }),
//   (req, res, next) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       res.status(422).json({ validationErrors: errors.array() });
//     } else {
//       next();
//     }
//   },
// ];
module.exports = validateMovie;
