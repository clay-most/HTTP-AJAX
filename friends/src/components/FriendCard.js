//indiviual friend component builder recives data from state//
import React from 'react';
import { Link } from 'react-router-dom';

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.age}</p>
        <p>{this.props.email}</p>
        <Link to="/edit">
          <button>Edit</button>
        </Link>
      </div>
    );
  }
}

export default FriendCard;
