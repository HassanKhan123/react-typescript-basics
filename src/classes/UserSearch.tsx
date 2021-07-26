import React, { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

export class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  searchUser = () => {
    const { name, user } = this.state;
    const foundUser = this.props.users.find(user => {
      return user.name === name;
    });

    this.setState({
      name: '',
      user: foundUser,
    });

    console.log(foundUser);
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.searchUser}>Search</button>
        <div>
          {user && user.name} {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
