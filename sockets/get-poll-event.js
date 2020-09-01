module.exports = function getPollEvent({ getPoll,socket,io }) {
  return async function getPollData(data) {
    socket.join(data);
    console.log(data)
    socket.interval = setInterval(async () => {
      const res = await getPoll(data);
      // console.log(res)
      io.to(data).emit('refresh-data',JSON.stringify(res))
    },1000)
    
    //socket.emit("success")
  };
};
