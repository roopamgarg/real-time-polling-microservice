const socketIO = require("socket.io");
const { postVote,getPoll } = require("../controllers");
const addVoteEvent = require("./add-vote-event");
const getPollEvent = require("./get-poll-event");
const io = socketIO.listen(5000);

io.on("connect", (socket) => {
  console.log(socket.id)
  socket.on("add-vote", postVote);
  socket.on("get-poll", getPollEvent({getPoll,socket,io}));
  socket.on("disconnect",() => clearInterval(socket.interval))
});
