import React from 'react';

import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  //fetching data//
  componentDidMount() {
    axios('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route path="/new">
          <NewFriend />
        </Route>
      </div>
    );
  }
}

export default App;
