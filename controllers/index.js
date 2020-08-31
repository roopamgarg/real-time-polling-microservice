const { addPoll, voteForPoll,fetchPoll } = require("../use-cases");
const makePostPoll = require('./post-poll');
const makePostVote = require('./post-vote');
const {makeGetPoll, makeGetPollRequestHandler} = require('./get-poll');

const postPoll = makePostPoll({addPoll});
const postVote = makePostVote({voteForPoll});
const getPoll = makeGetPoll({fetchPoll});
const getPollRequest = makeGetPollRequestHandler({fetchPoll})

module.exports = {
    postPoll,
    postVote,
    getPoll,
    getPollRequest
}