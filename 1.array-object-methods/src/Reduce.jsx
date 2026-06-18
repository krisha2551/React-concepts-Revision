function Reduce() {
  const prices = [
    500,
    1200,
    800,
    1500,
  ];

  const total = prices.reduce(
    (sum, price) => sum + price,
    0
  );

  return (
    <>
      <h2>Reduce Method</h2>

      <p>
        Prices:
        {" "}
        {prices.join(", ")}
      </p>

      <h3>Total: ₹{total}</h3>
    </>
  );
}

export default Reduce;