//require express
const express = require("express");

//create app
const app = express();

//create routes
app.get("/posts", (req, res) => {});
app.post("/posts", (req, res) => {});

//listen to app
app.listen(4000, () => {
  console.log("Posts app listening on 4000!");
});
