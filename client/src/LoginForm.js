import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "./axios";

function LoginForm() {
  let navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  function onFormInput(e) {
    const key = e.target.name;
    setFormInput({ ...formInput, [key]: e.target.value });
  }

  function onFromSubmit(e) {
    e.preventDefault();
    axiosInstance
      .post(`token/`, formInput)
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>Login Form:</h1>
      <form onSubmit={onFromSubmit}>
        <label htmlFor="email">email:</label>
        <input name="email" value={formInput.email} onChange={onFormInput} />
        <label htmlFor="password">password:</label>
        <input
          name="password"
          value={formInput.password}
          onChange={onFormInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
