// new friend form on submit pushes new friend to state//
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class NewFriend extends React.Component {
  constructor() {
    super();
    this.state = { name: '', email: '', age: '' };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createFriend = event => {
    event.preventDefault();

    const { name, age, email } = this.state;
    const newFriend = { name, age, email };

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.props.updateFriends(response.data);
      })
      .catch(err => {
        console.log('ERR', err);
      });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <h2> Make New Friends</h2>
        <form onSubmit={this.createFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={age}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
          <Link to="/">
            <button>back to my list</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default NewFriend;
