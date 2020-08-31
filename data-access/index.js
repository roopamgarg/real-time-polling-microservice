require("./Schemas/polls");
const makePollsDb = require("./polls-db");
const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost:27017/poll", {
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected With DB");
});
let pollsDb = makePollsDb();

module.exports = Object.freeze({ pollsDb });
