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

  //event handlers//
  handleAdd = friend => {
    this.setState({ friend });
  };

  handleEdit = (name, age, email, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, {
        name,
        age: Number(age)
      })
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        throw new Error(err);
      });
  };

  handleDelete = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              edit={this.handleEdit}
              delete={this.handleDelete}
            />
          )}
        />

        <Route
          path="/new"
          render={props => <NewFriend {...props} add={this.handleAdd} />}
        />
      </div>
    );
  }
}

export default App;
