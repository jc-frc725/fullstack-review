const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/repoDB');
// this is connecting to localhost but no port is given
// goes to "fetcher" db, probably make something different
let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  name: {type: String, unique: true},
  stargazers: Number,
  watchers: Number,
  forks: Number

});


// Models: like Classes - can create new instances of them using "new Class"
// instances of Models are the actual documents that live in db

// when collection is created,
// Mongoose automatically looks for lowercase, plural version of
// given Model name (i.e. collection "repos" down below should live in "fetcher" db)
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

//let newRepo = new Repo({name: "Hello World1", stargazers: 2, watchers: 3, forks: 0}).save()

module.exports.save = save;