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
  //console.log(req.body);
  git.getReposByUsername(req.body.username, (githubData) => {
    let userRepos = []

    githubData.forEach(repo => {
      let currentRepo = {
        name: repo.full_name,
        stargazers: repo.stargazers_count,
        watchers: repo.watchers_count,
        forks: repo.forks_count,
        url: repo.html_url
      }
      userRepos.push(currentRepo);
    });

    db.save(userRepos);

  });
  res.send('immediately fetch from updated db');
});

app.get('/repos', function (req, res) {
  let response;
  db.getTop25((repoData) => {
    //console.log(repoData);
    res.send(repoData);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

