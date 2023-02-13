import React, { useState } from "react";

const Inputform = () => {
  const [values, setValues] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        style={{ width: "80%", margin: "10px 0" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        style={{ width: "80%", margin: "10px 0" }}
      />
      <button type="submit" style={{ width: "40%", padding: "10px 0" }}>
        Submit
      </button>
    </form>
  );
};

export default Inputform;
