const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const Message = require("../../models/Mail");
const User = require("../../models/User");
const mongoose = require('mongoose');

// @route   POST api/mail
// @desc    Send a message
// @access  public
router.post("/", auth, async (req, res) => {
  const { receiver, subject, body } = req.body;

  // Build project object
  const messageFields = {};
  messageFields.sender = req.user.id;
  messageFields.receiver = receiver;
  messageFields.subject = subject;
  messageFields.body = body;

  try {
    const message = new Message(messageFields);

    await message.save();
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/mail/me
// @desc    Get all messages that belong to logged in user
// @access  private
router.get("/me", auth, async (req, res) => {
  try {
    const message = await Message.find({
      receiver: req.user.id
    }).populate("sender", ["name", "avatar"]);
    if (!message) {
      return res
        .status(400)
        .json({ msg: "there are no messages for this user" });
    }
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/mail/mail_id
// @desc    Delete one message by id
// @access  private
router.delete("/:message_id", auth, async (req, res) => {
  try {

    // Remove message
    await Message.findOneAndRemove({ _id: req.params.message_id });

    res.json({ msg: 'Message deleted' });    

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/mail/:message_id
// @desc    Get message by its id
// @access  private
router.get("/:message_id", async (req, res) => {
  try {

    let id;
        if (typeof req.params.message_id === "string") {
            id = mongoose.Types.ObjectId(req.params.message_id);
        } else {
            id = req.params.message_id;
        }

    const message = await Message.findById(id).populate("sender", ["name", "avatar"]);

    if (!message) return res.status(400).json({ msg: "message not found" });

    res.json(message);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(400).json({ msg: "message not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
