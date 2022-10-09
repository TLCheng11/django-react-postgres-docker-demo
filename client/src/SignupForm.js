import { useState } from "react";
import { axiosInstance } from "./axios";

function SignupForm() {
  const [formInput, setFormInput] = useState({
    email: "",
    username: "",
    password: "",
  });

  function onFormInput(e) {
    const key = e.target.name;
    setFormInput({ ...formInput, [key]: e.target.value });
  }

  function onFromSubmit(e) {
    e.preventDefault();
    axiosInstance
      .post("users/register/", formInput)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.response.data));
  }

  return (
    <div>
      <h1>Signup Form:</h1>
      <form onSubmit={onFromSubmit}>
        <label htmlFor="email">email:</label>
        <input name="email" value={formInput.email} onChange={onFormInput} />
        <label htmlFor="username">username:</label>
        <input
          name="username"
          value={formInput.username}
          onChange={onFormInput}
        />
        <label htmlFor="password">password:</label>
        <input
          name="password"
          value={formInput.password}
          onChange={onFormInput}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
