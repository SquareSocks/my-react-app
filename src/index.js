import React, { useState } from "react";
import ReactDOM from "react-dom/client";

/*
function MyForm() {
  return (
    <form>
      <label>
        Enter you name:
        <input type="text" />
      </label>
    </form>
  );
}
*/

/* // MULTIPLE INPUT FIELDS
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome ${inputs.username} to the age of ${inputs.age}`);
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
*/

/*// TEXTAREA
function MyForm2() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}
*/

// SELECT
function MyForm3() {
  const [myCar, setMyCar] = useState("Volvo"); // you don't have to set the first case. It does work as ""

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

/* This is a expanded way to get root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm3 />);
