import React, { useState } from "react";

export const MyForm1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form data is ${formData}`);
    // Submit the formData to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

// import { useState } from "react";

// export const Form1 = () => {
//   const [Username, setUsername] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Form data is ${Username}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>User Name </label>
//         <input
//           type="text"
//           value={Username}
//           onChange={(event) => setUsername(event.target.value)}
//         ></input>
//         <label>User Name </label>
//         <input
//           type="text"
//           value={Username}
//           onChange={(event) => setUsername(event.target.value)}
//         ></input>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
