import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    // probably put this.search = this.search.bind(this);
  }
  componentDidMount() {
    this.getRepos();
  }


  getRepos() {

    axios.get('/repos')
      .then(response =>
        this.setState({repos: response.data}))
      .catch(error => console.log(error));
  }

  printRepos(repos) {
    console.log(repos);
  }

  search (term) {
    console.log(`${term} was searched`);
    let user = {username: term}
    axios.post('/repos', user)
      .then(response => {
        console.log(response);
        this.getRepos();
        //this.setState({repos: response.data})
      })
      .catch(error => console.log(error));

    this.getRepos();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));