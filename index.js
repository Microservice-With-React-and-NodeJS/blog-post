//require express
const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
//require axios
const axios = require("axios");

//create app
const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

//create routes
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title
  };

  //emit event whenever something interesting happening
  //post req to axios event broker, second argument is the data, it has two properties: type :what type of event it is and second is data property.
  //event can have any sturcture
  //this is an async reqst, making the netwrk req
  await axios.post("http://localhost:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title
    }
  });

  res.status(201).send(posts[id]);
});

//event handlers
app.post("/events", (req, res) => {
  console.log("received event", req.body.type);
  res.send({});
});

//listen to app
app.listen(4000, () => {
  console.log("v30");
  console.log("Posts app listening on 4000!");
});
