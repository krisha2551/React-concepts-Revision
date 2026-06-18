function Map() {
  const students = [
    "Krisha",
    "Riya",
    "Priya",
    "Heli",
  ];

  return (
    <>
      <h2>Map Method</h2>

      <p>Students List:</p>

      {students.map((student, index) => (
        <p key={index}>
          {index + 1}. {student}
        </p>
      ))}
    </>
  );
}

export default Map;