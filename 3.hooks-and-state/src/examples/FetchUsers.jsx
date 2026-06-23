import { useEffect, useState } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await res.json();
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <>
      <h1>Users List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchUsers;