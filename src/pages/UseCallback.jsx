import React, { useState } from "react";

const allUsers = ["John", "Paula", "Caterina", "Alex", "Brenda"];

const UseCallback = () => {
  const [users, setUsers] = useState(allUsers);
  const handleSearch = (text) => {
    const filteredUsers = allUsers.filter((user) => {
      user.includes(text);
    });
    setUsers(filteredUsers);
  };

  return (
    <div>
      <div>
        <button>shuffle</button>
        <input type="text" />
      </div>
    </div>
  );
};

export default UseCallback;
