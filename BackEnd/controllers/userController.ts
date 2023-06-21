const express = require('express');

const user = express.Router();

const bcrypt = require("bcrypt");

const User = require("../models/user");


// CREATE
user.post("/create", async (req, res) => {
  try {
    let { password, ...etc } = req.body;

    const user = await new User({
      ...etc,
      passwordDigest: await bcrypt.hash(password, 16),
    }).save();

    res.send(user);
  } catch (error) {
    res.status(500).json({ message: `Unable to add User: ${error}` });
    console.log(error);
  }
});

// LOGIN
user.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({
        where: { name: req.body.name },
      });
    if (
      !user ||
      !(await bcrypt.compare(req.body.password, user.passwordDigest))
    ) {
      res.status(404).json({
        message: "Please make sure email and password are correct",
      });
    } else {
      res.json({ user });
    }
  } catch (error) {
    res.status(500).json({ message: `Unable to add User: ${error}` });
    console.log(error);
  }
});

// USER PROFILE
user.get("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id).populate({
      path: 'items',
    });
    res.send(user)

  } catch (error) {
    res.status(500).json({ message: `${error}` });
    console.log(error);
  }
});

module.exports = user;
