import React, { useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };
  users.length === 0 && getUsers();
  console.log(users);

  return (
    <div className="p-5  mt-16  mx-auto w-fit">
      <h1 className="font-semibold uppercase mb-4 text-orange-500">
        mongodb database connection
      </h1>
      <h1 className="bg-slate-500 uppercase text-center">
        all user list from database
      </h1>
      {users.map((user) => (
        <div
          key={user._id}
          className="border bg-gray-50 text-gray-950 flex items-center rounded-sm px-4 py-2 my-2"
        >
          <div className="w-20 h-20 overflow-hidden object-cover shadow-lg shadow-gray-500 rounded-full mr-2">
            <img src={user.img} alt="user.name" className="" />
          </div>
          <div>
            <h2 className="uppercase ">{user.name}</h2>
            <h2 className="lowercase ">{user.username}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
