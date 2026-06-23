import { useState } from "react";

const FormWithObject = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    city: "",
  });

  const handleChange = (field, e) => {
    setUser((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={user.name}
        onChange={(e) => handleChange("name", e)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={(e) => handleChange("email", e)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter City"
        value={user.city}
        onChange={(e) => handleChange("city", e)}
      />

      <br />
      <br />

      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>City: {user.city}</h3>
    </>
  );
};

export default FormWithObject;