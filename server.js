const express = require("express");
const connectDB = require("./config/db");
var path = require('path');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/project", require("./routes/api/project"));
app.use("/api/search", require("./routes/api/search"));
app.use("/api/faves", require("./routes/api/faves"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set the static folder
  app.use(express.static("client/build"));

  //all pages/paths will lead to the client/build/index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
