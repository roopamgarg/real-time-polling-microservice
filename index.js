const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const { postPoll, postVote, getPollRequest } = require("./controllers");
const makeCallback = require("./express-callback");
const { frontendUrl } = require("./config/prod");
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors({
  origin: frontendUrl,
  methods: ["GET", "POST"],
  credentials : true
}));
const httpServer = require("http").createServer(app);
require("./sockets/index")(httpServer,{ 
  cors: {
    origin: frontendUrl,
    methods: ["GET", "POST"],
  credentials : true
    
  }
});

app.use(bodyParser.json());

app.post("/poll", makeCallback(postPoll));
app.get("/get-poll/:id", makeCallback(getPollRequest))
httpServer.listen(PORT, () => {
  console.log("Server is listening at " + PORT);
});

module.exports = app;
