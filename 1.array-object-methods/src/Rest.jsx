function Rest() {
  const addNumbers = (...numbers) => {
    return numbers.reduce(
      (sum, num) => sum + num,
      0
    );
  };

  return (
    <>
      <h2>Rest Operator</h2>

      <p>
        Total:
        {" "}
        {addNumbers(
          10,
          20,
          30,
          40,
          50
        )}
      </p>
    </>
  );
}

export default Rest;