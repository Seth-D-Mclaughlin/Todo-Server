const router = require("./taskcontroller");

let express = require("express").Router();
let User = require("../db").import("../models/user");

//User Sign up
router.post("/create", function (req, res) {
  User.create({
    firstName: req.body.user.firstName,
    email: req.body.user.email,
    password: req.body.user.password,
  })
    .then(function createSuccess(user) {
      // Update code
      res.json({
        user: user,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//User Login
router.post("/login", function (req, res) {
  User.findOne({
    where: {
      email: req.body.user.email,
    },
  })
    .then(function loginSuccess(user) {
      if (user) {
        res.status(200).json({
          user: user,
        });
      } else {
        res.status(500).json({ error: "User does not exist." });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
