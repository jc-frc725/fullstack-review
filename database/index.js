const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  // name: repo name
  name: String,
  user: String,
  stargazers: Number,
  watchers: Number,
  forks: Number

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

let newRepo = new Repo({name: "Hello World"}).save();

module.exports.save = save;