require("./Schemas/polls");
const makePollsDb = require("./polls-db");
const Mongoose = require("mongoose");
const url = "mongodb+srv://roopam_2:roopam321@cluster0.bfgns.mongodb.net/poll?retryWrites=true&w=majority"
Mongoose.connect(url, {
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected With DB");
});
let pollsDb = makePollsDb();

module.exports = Object.freeze({ pollsDb });
