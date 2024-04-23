import React, { useState, useCallback } from "react";
import SearchBar from "../components/SearchBar";

const allUsers = ["john", "paula", "caterina", "alex", "brenda"];

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const UseCallback = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = (text) => {
    console.log(users[0]);
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  };

  // in React, functions (even if they have the same code, doing the same thing) are different every render!
  //   const handleSearch = useCallback(
  //     (text) => {
  //       console.log(users[0]);
  //       const filteredUsers = allUsers.filter((user) => user.includes(text));
  //       setUsers(filteredUsers);
  //     },
  //     [users]
  //   );

  return (
    <div>
      <div className="flex gap-x-2">
        <button
          className="bg-violet-200 px-2 py-1 rounded-md"
          onClick={() => setUsers(shuffle(allUsers))}
        >
          shuffle
        </button>
        <SearchBar onChange={handleSearch} />
      </div>
      <ul className="pt-4">
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseCallback;
