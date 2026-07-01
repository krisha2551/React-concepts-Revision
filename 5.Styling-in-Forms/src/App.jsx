import "./App.css";

import InlineForm from "./components/InlineForm";
import ExternalForm from "./components/ExternalForm";
import StyledForm from "./components/StyledForm";
import BootstrapForm from "./components/BootstrapForm";

function App() {
  return (
    <>
      <InlineForm />
      <hr />

      <ExternalForm />
      <hr />

      <StyledForm />
      <hr />

      <BootstrapForm />
    </>
  );
}

export default App;