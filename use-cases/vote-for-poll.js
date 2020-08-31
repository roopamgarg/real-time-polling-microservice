const makePoll = require('../entities/poll');
module.exports = function makeVoteForPoll({pollsDb}){
    return function voteForPoll (id,voteFor) {
    
        pollsDb.addVote(id,voteFor)
    }
}