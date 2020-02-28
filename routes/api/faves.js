const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const Faves = require("../../models/Faves");
const User = require("../../models/User");

// @route   POST api/faves
// @desc    add a new fave to user's list
// @access  private
router.post("/", auth, async (req, res) => {
  try {
    let faves = await Faves.findOne({ user: req.user.id });

    if (faves) {

      // let existingFav = await Faves.findOne(
      //   {user: req.user.id }, 
      //   {favorites: { user: {$in: req.body.newFav} }}
      //   )

      //   console.log(existingFav);

      // if (existingFav) {
      //   return res.status(400).send("User already added to favorites");
      // } else {
      //   faves = await Faves.findOneAndUpdate(
      //     { user: req.user.id },
      //     { $push: { favorites: { user: req.body.newFav } } }
      //   );
      // }

      faves = await Faves.findOneAndUpdate(
        { user: req.user.id },
        { $push: { favorites: { user: req.body.newFav } } }
      );

      return res.json(faves);
    }

    // Create
    faves = new Faves({
      user: req.user.id,
      favorites: [{ user: req.body.newFav }]
    });

    await faves.save();

    res.json(faves.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/faves/me
// @desc    get current user's favorites list
// @access  private
router.get("/me", auth, async (req, res) => {
  try {
    const faves = await Faves.findOne({
      user: req.user.id
    }).populate("favorites.user", ["name", "avatar"]);

    // if no faves then return 400 message
    if (!faves) {
      return res.status(400).json({ msg: "You do not have any favorites." });
    }
    // if faves res.json will  send faves
    res.json(faves);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route   DELETE api/faves/:fave_id
// @desc    find fav by id and delete
// @access  private
router.delete("/:fav_id", auth, async (req, res) => {
  
  try {
    await Faves.findOneAndUpdate(
      {user: req.user.id},
       {$pull: {favorites:  {user: req.params.fav_id}}}
    )

    res.json(`successfully removed ${req.params.fav_id}`);
    

  } catch {
    console.error(err.message);
    res.status(500).send("server error");
  }

});

module.exports = router;
