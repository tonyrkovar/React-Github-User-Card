import React from 'react';
import axios from 'axios';
import './App.css';
import GithubCards from './components/GithubCards';
import GithubUser from './components/GithubUser';


class App extends React.Component {
  state = {
    followers: []
  };


  componentDidMount = () => {
    axios
      .get('https://api.github.com/users/tonyrkovar/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err, 'Error')
      })
  }



  render() {
    return (
      <div className="App">
        <GithubUser />
        <GithubCards key={this.state.id} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
