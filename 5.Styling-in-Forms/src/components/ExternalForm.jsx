import "./ExternalForm.css";

const ExternalForm = () => {
  return (
    <div className="form-container">
      <h2>External CSS Form</h2>

      <input type="text" placeholder="Enter Name" />

      <input type="email" placeholder="Enter Email" />

      <input type="password" placeholder="Enter Password" />

      <button>Submit</button>
    </div>
  );
};

export default ExternalForm;