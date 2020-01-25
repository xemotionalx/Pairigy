const mongoose = require("mongoose");

// `username` will trim leading and trailing whitespace before it's saved
const MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
},
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
},
  subject: {
      type: String
  },
  body: {
      type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Message = mongoose.model("message", MessageSchema);
