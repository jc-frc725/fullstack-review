const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/repoDB',)
  .then(() => console.log('Connected to MongoDB'));

let repoSchema = mongoose.Schema({
  name: {type: String, unique: true},
  stargazers: Number,
  watchers: Number,
  forks: Number,
  url: String
});


// Models: like Classes - can create new instances of them using "new Class"
// instances of Models are the actual documents that live in db

// when collection is created,
// Mongoose automatically looks for lowercase, plural version of
// given Model name (i.e. collection "repos" down below should live initial "fetcher" db)
let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  repos.forEach(repo => {
    let newUserRepo = new Repo ({
      name: repo.name,
      stargazers: repo.stargazers,
      watchers: repo.watchers,
      forks: repo.forks,
      url: repo.url
    });
    newUserRepo.save((err, newUserRepo) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`success? repo name: ${newUserRepo.name}`)
      }
    })
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

let getTop25 = (callback) => {

  Repo.find().
    sort({stargazers: -1}).
    limit(25)
    .then(data => {
      callback(data)
    });

}


module.exports= {save, getTop25}