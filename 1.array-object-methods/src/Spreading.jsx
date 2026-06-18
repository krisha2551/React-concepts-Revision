function Spreading() {
  const frontend = [
    "HTML",
    "CSS",
    "React",
  ];

  const backend = [
    "Node",
    "Express",
    "MongoDB",
  ];

  const skills = [
    ...frontend,
    ...backend,
  ];

  const user = {
    name: "Krisha",
    age: 25,
  };

  const updatedUser = {
    ...user,
    city: "Bhavnagar",
  };

  return (
    <>
      <h2>Spread Operator</h2>

      <h3>Skills</h3>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <h3>User Information</h3>

      <p>Name: {updatedUser.name}</p>
      <p>Age: {updatedUser.age}</p>
      <p>City: {updatedUser.city}</p>
    </>
  );
}

export default Spreading;