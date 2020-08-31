const makePoll = require("../entities/poll");

module.exports = function makeAddPoll({ pollsDb }) {
  return async function addPoll(pollInfo) {
    const poll = makePoll(pollInfo);
    return pollsDb.insert(poll);
  };
}