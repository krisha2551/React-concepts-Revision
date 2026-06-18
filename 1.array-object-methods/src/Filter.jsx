function Filter() {
  const numbers = [10, 20, 30, 40, 50, 60];

  const result = numbers.filter(
    (num) => num > 30
  );

  return (
    <>
      <h2>Filter Method</h2>

      <p>
        Original: {numbers.join(", ")}
      </p>

      <p>
        Filtered: {result.join(", ")}
      </p>
    </>
  );
}

export default Filter;