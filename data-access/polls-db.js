const mongoose = require("mongoose");
const PollSchema = require("./Schemas/polls");

module.exports =  function makePollsDb () {
   // const PollSchema = mongoose.model("polls")

    async function insert (pollInfo) {
        const result = new PollSchema(pollInfo)
        await result.save();
        return result;
    }
    async function addVote (id,option) {
        return PollSchema.updateOne({_id:id},{$inc:{['answers.'+option+'.votes']:1}});
    }
    async function fetch (id) {
        const result = await PollSchema.findById(id);
        return result;
    }
    return {
        insert,
        addVote,
        fetch
    }
}