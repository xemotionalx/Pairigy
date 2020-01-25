const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");

const { check, validationResult } = require("express-validator");

const Faves = require("../../models/Faves");
const User = require("../../models/User");

// @route   POST api/faves
// @desc    add a new fave
// @access  private
router.post("/", auth, async (req, res) => {
  try {
    let faves = await Faves.findOne({ user: req.user.id });

    if (faves) {
      // Update
      faves = await Faves.findOneAndUpdate(
        { user: req.user.id },
        { $push: { favorites: req.body.newFav } },
        { new: true, upsert: true }
      );
      return res.json(faves);
    }

    // Create
    faves = new Faves({
      user: req.user.id,
      favorites: [req.body.newFav]
    });

    await faves.save();

    res.json(faves);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
