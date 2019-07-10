//feeds Indiviual friends to FriendsCard and renders them//
import React from 'react';

import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';

const FriendsList = props => {
  return (
    <div>
      <Link to="/new">
        <button>New Friend!</button>
      </Link>
      <div className="list">
        {props.friends.map(friend => (
          <FriendCard
            name={friend.name}
            age={friend.age}
            email={friend.email}
            id={friend.id}
            key={friend.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
