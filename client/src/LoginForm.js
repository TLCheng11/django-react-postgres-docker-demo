import { useState } from "react";

function LoginForm() {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  function onFormInput(e) {
    const key = e.target.name;
    setFormInput({ ...formInput, [key]: e.target.value });
  }

  return (
    <div>
      <h1>Login Form:</h1>
      <label htmlFor="email">email:</label>
      <input name="email" value={formInput.email} onChange={onFormInput} />
      <label htmlFor="password">password:</label>
      <input
        name="password"
        value={formInput.password}
        onChange={onFormInput}
      />
    </div>
  );
}

export default LoginForm;
