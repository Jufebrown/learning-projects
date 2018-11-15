var Company = require("../models/Company");

/**
   * POST /login
   * Sign in with email and password
   */
exports.create = function(req, res, next) {
  req.send(req.body)
  req.assert("email", "Email is not valid").isEmail();
  req.assert("email", "Email cannot be blank").notEmpty();
  req.assert("password", "Password cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  new User({ email: req.body.email }).fetch().then(function(user) {
    if (!user) {
      return res.status(401).send({
        msg:
          "The email address " +
          req.body.email +
          " is not associated with any account. " +
          "Double-check your email address and try again."
      });
    }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (!isMatch) {
        return res.status(401).send({ msg: "Invalid email or password" });
      }
      res.send({ token: generateToken(user), user: user.toJSON() });
    });
  });
};
