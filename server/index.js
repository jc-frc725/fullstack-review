const express = require('express');
let app = express();
const git = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} coming from url ${req.path}`);
  next();
})

app.post('/repos', function (req, res) {
  console.log(req.body);
  // This route should take the github username provided
  git.getReposByUsername(req.body.username, (githubData) => {
    let userRepos = []

    // take array and filter for stargazers_count, watchers_count, forks_count
    githubData.forEach(repo => {
      let currentRepo = {
        name: repo.full_name,
        stargazers: repo.stargazers_count,
        watchers: repo.watchers_count,
        forks: repo.forks_count
      }
      userRepos.push(currentRepo);
    })
    // and get the repo information from the github API, then
    // save the repo information in the database
    db.save(userRepos);
  });
  res.send(`If you see this, DB update may have succeeded. Check DB`);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  let response;
  db.getTop25((repoData) => {
    console.log(repoData);
    res.send(repoData);
  })
  //res.send(response);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

