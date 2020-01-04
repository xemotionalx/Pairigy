const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const config = require("config");

const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

//@route   POST api/users
//@desc    Register user
//@access  Public
router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      //Get users gravatar
      const avatar = gravatar.url(email, {
        //size
        s: "200",
        //rating
        r: "pg",
        //default, mm sets the generic user icon image
        d: "mm"
      });

      //creates a new user instance, does not save to db
      user = new User({
        name,
        email,
        avatar,
        password
      });

      //ECRYPT PASSWORD using bcrypt
      //creating a 'salt' to be able to hash below
      //10 'rounds' passed because that's what's recommended in the doc
      //the more rounds you have the more secure but the slower it is
      const salt = await bcrypt.genSalt(10);

      //this will create the 'hash' and save it into a new user, using the user we made above
      user.password = await bcrypt.hash(password, salt);

      //user saved to db, ANYTHING that returns a promise we put 'await' infront of to dry the .then usage
      await user.save();

      //Return jsonwebtoken, used for frontend login
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
