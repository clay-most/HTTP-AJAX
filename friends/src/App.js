import React from 'react';

import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  //fetching data//
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({
        friends: response.data
      })
    })
    .catch(err => {
      console.log('Error', err)
    })
  }

  updateFriends = newFriends => {
    this.setState({
      friends: newFriends
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Friends</h1>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />

        <Route
          path="/new"
          render={props => <NewFriend {...props} updateFriends={this.updateFriends} />}
        />
      </div>
    );
  }
}

export default App;
