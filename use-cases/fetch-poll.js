
module.exports = function makeFetchPoll({ pollsDb }) {
  return async function fetchPoll(id) {
    return pollsDb.fetch(id);
  };
}