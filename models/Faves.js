const mongoose = require("mongoose");

const FaveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  favorites: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Faves = mongoose.model("favorite", FaveSchema);
