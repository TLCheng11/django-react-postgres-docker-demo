import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Home from "./Home";
import ChatRoom from "./ChatRoom";
import SearchResult from "./SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/chatroom/:room" element={<ChatRoom />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
