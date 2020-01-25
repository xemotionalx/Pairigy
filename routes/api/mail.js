const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const Mail = require("../../models/Mail");
const User = require("../../models/User");

router.post(
  '/', auth, async (req, res) => { 
    const {
      receiver,
      subject,
      body
  } = req.body;

  // Build project object
  const messageFields = {};
  messageFields.sender = req.user.id;
  messageFields.receiver = receiver;
  messageFields.subject = subject;
  messageFields.body = body;

    try {

      message = new Message(messageFields);

            await message.save();
            res.json(message);
      
    }
    catch(err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  });
// Find all
  router.get('/me', auth, async (req, res) => {
    try {
        const message = await .find({ receiver: req.user.id })
            .populate('sender', ['name', 'avatar']);
            if (!message) {
              return res.status(400).json({ msg: 'there are no messages for this user' });
          }
          res.json(message);

        } catch(err) {
            console.error(err.message)
            res.status(500).send('Server Error')
          }
        })

        router.get('/:message_id', async (req, res) => {
          try {
      
              const message = await Message.findById(req.params.message_id)
              .populate('sender.user', ['name', 'avatar']);
      
              if (!message) return res.status(400).json({ msg: 'message not found' });
      
              res.json(message);
      
          } catch (err) {
              console.error(err.message);
              if (err.kind === 'ObjectId') {
                  return res.status(400).json({ msg: 'message not found' });
      
              }
              res.status(500).send('Server Error');
          }
      });
        
module.exports = router;
