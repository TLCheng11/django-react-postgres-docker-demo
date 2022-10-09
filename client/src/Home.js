import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "./axios";

function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance.get("posts/").then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/login">
        <p>login</p>
      </NavLink>
      <NavLink to="/signup">
        <p>signup</p>
      </NavLink>
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
