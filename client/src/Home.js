import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "./axios";

function Home() {
  const [user, setUser] = useState({});
  const [chatroom, setChatroom] = useState("");

  useEffect(() => {
    axiosInstance.get("posts/").then((res) => console.log(res));
  }, []);

  function logout() {
    axiosInstance.post("users/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/login">
        <p>login</p>
      </NavLink>
      <NavLink to="/signup">
        <p>signup</p>
      </NavLink>
      <button onClick={logout}>Logout</button>
      <div style={{ display: "flex" }}>
        <label htmlFor="chatroom">Room: </label>
        <input
          name="chatroom"
          value={chatroom}
          onChange={(e) => setChatroom(e.target.value)}
        />
        <NavLink to={`chatroom/${chatroom}`}>
          <p>join</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
