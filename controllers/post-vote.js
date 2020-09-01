module.exports = function makeAddVote({ voteForPoll,socket }) {
    return function addVote(data) {
      try {

        data = JSON.parse(data);
        const {id,option} = data
        voteForPoll(id,option)
      } catch (err) {
        console.log(err);
      }
    };
  }
  