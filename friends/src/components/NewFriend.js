// new friend form on submit pushes new friend to state//
import React from 'react';
import { Link } from 'react-router-dom';
class NewFriend extends React.Component {
  render() {
    return (
      <div>
        <h2> Make New Friends</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Age" />
          <input type="text" placeholder="Email" />
          <button>submit</button>
          <Link to="/">
            <button>back to my list</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default NewFriend;
