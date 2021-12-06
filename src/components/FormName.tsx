import { useState } from "react";

function NameForm() {
  const [state, setState] = useState({ value: "" });

  const handleChange = function (event: any) {
    setState({ value: event.target.value });
  };

  const handleSubmit = function (event: any) {
    alert("Le nom a été soumis : " + state.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={state.value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default NameForm;
