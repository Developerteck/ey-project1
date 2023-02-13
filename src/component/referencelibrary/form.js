import { useState, useEffect } from "react";

function Example() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (formData.name && formData.email && formData.password) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [formData]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valid) {
      console.log("Form submitted: ", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginform">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={!valid}>
        Submit
      </button>
    </form>
  );
}
export default Example;
