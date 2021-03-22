require("./Schemas/polls");
const makePollsDb = require("./polls-db");
const Mongoose = require("mongoose");
const { database } = require("../config");
const url = process.env.database || database;
Mongoose.connect(url, {
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected With DB");
});
let pollsDb = makePollsDb();

module.exports = Object.freeze({ pollsDb });
