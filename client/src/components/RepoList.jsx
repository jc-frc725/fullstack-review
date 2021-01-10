import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <div style={{marginTop: "10px"}}>
      {repos.map(repo =>
        <Repo name={repo.name} url={repo.url} key={repo._id} />
      )}
    </div>
  </div>
)

export default RepoList;