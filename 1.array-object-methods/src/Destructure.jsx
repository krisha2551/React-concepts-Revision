function Destructure() {
  const user = {
    name: "Krisha",
    age: 25,
    city: "Bhavnagar",
  };

  const { name, age, city } = user;

  const skills = ["HTML", "CSS", "React"];

  const [first, second, third] = skills;

  return (
    <>
      <h2>Destructuring</h2>

      <h3>Object Destructuring</h3>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>

      <h3>Array Destructuring</h3>

      <p>{first}</p>
      <p>{second}</p>
      <p>{third}</p>
    </>
  );
}

export default Destructure;