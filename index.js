const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const { postPoll, postVote, getPollRequest } = require("./controllers");
const makeCallback = require("./express-callback");

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/poll", makeCallback(postPoll));
app.get("/get-poll/:id", makeCallback(getPollRequest))
app.listen(PORT, () => {
  console.log("Server is listening at " + PORT);
});

module.exports = app;
