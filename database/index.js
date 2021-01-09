const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  name: String,
  stargazers: Number,
  watchers: Number,
  forks: Number

});

// Mongoose automatically looks for lowercase, plural version of
// given Model name (i.e. "repos" down below)
let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  repos.forEach(repo => {
    console.log(repo);
    //console.log(repo.schema);
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  // db.repos.insert( { name: "user/repo_name", stargazers: 5, watchers: 3, forks: 0 } )
}

//let newRepo = new Repo({name: "Hello World"}).save();

module.exports.save = save;