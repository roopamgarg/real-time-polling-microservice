const io = require("socket.io");
const { postVote,getPoll } = require("../controllers");
const addVoteEvent = require("./add-vote-event");
const getPollEvent = require("./get-poll-event");
const { connect } = require("mongoose");
const server = io.listen(5000);

server.on("connect", (socket) => {
  console.log(socket.id)
  socket.on("add-vote", postVote);
  socket.on("get-poll", getPollEvent({getPoll,socket}));
});
