const express = require('express');
let app = express();
const git = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} coming from url ${req.path}`);
  next();
})

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log(req.body);
  // This route should take the github username provided
  git.getReposByUsername(req.body.username, (userRepos) => {
    console.log(userRepos);
  })

  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send(`${JSON.stringify(req.body)} received`);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

