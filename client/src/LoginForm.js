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
      <label htmlfor="email">email:</label>
      <input name="email" value={formInput.email} onChange={onFormInput} />
      <label htmlfor="password">password:</label>
      <input
        name="password"
        value={formInput.password}
        onChange={onFormInput}
      />
    </div>
  );
}

export default LoginForm;
