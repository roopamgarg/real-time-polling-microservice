const makeAddPoll = require('./add-poll');
const makeVoteForPoll = require('./vote-for-poll');
const makeFetchPoll = require('./fetch-poll');
const {pollsDb} = require('../data-access');

const addPoll = makeAddPoll({pollsDb});
const voteForPoll = makeVoteForPoll({pollsDb});
const fetchPoll = makeFetchPoll({pollsDb});
module.exports = {
    addPoll,
    voteForPoll,
    fetchPoll
}