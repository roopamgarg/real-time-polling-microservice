module.exports = function addVoteEvent ({postVote,io}){
    return async function addVote (data) {
        postVote(data);
    } 
}