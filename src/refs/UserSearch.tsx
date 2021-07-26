import React, { useState, useRef, useEffect } from 'react';

const users = [
  {
    name: 'Hassan',
    age: 22,
  },
  {
    name: 'Khan',
    age: 22,
  },
  {
    name: 'Babar',
    age: 22,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const searchUser = () => {
    const foundUser = users.find(user => {
      return user.name === name;
    });

    setName('');
    setUser(foundUser);

    console.log(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={searchUser}>Search</button>
      <div>
        {user && user.name} {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
