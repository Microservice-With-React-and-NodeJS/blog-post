//require express
const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

//create app
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

//create routes
app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title
  };
  res.status(201).send(posts[id]);
});

//listen to app
app.listen(4000, () => {
  console.log("Posts app listening on 4000!");
});
