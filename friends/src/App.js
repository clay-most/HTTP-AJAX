import React from 'react';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

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
        <FriendsList />
        <NewFriend />
      </div>
    );
  }
}

export default App;
