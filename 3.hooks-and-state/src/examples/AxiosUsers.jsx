import axios from "axios";
import { useEffect, useState } from "react";

const AxiosUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(res.data);
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

export default AxiosUsers;