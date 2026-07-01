import styles from "./StyledForm.module.css";

const StyledForm = () => {
  return (
    <div className={styles.container}>
      <h2>Styled Form (CSS Module)</h2>

      <input type="text" placeholder="Enter Name" />

      <input type="email" placeholder="Enter Email" />

      <input type="password" placeholder="Enter Password" />

      <button>Submit</button>
    </div>
  );
};

export default StyledForm;