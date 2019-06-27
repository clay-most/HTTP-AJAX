//indiviual friend component builder recives data from state//
import React from 'react';

class FriendCard extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return <div>
      <h2>{this.props.name}</h2>
      <p>{this.props.age}</p>
      <p>{this.props.email}</p>
    </div>;
  }
}

export default FriendCard;
