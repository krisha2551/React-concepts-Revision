import { useState } from "react";

const FormWithState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert(`Name: ${name}\nEmail: ${email}`);

    setName("");
    setEmail("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default FormWithState;