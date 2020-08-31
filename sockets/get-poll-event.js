module.exports = function getPollEvent({ getPoll,socket }) {
  return async function getPollData(data) {
    socket.join(data);
    const res = await getPoll(data);
    console.log(res)
    socket.emit("success")
  };
};
