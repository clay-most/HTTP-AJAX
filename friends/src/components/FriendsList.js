//feeds Indiviual friends to FriendsCard and renders them//
import React from 'react';

import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';

class FreindsList extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
      <div>
        <Link to="/new">
          <button>New Friend!</button>
        </Link>
      </div>
    );
  }
}

export default FreindsList;
