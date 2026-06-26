import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [page, setPage] = useState("register");

  const handleRegister = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      phone === ""
    ) {
      alert("All fields are required");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("phone", phone);

    alert("Registration Successful");

    setPage("login");
  };

  const handleLogin = () => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (
      loginUsername === savedUsername &&
      loginPassword === savedPassword
    ) {
      alert("Login Successful");
      setPage("home");
    } else {
      alert("Invalid Username or Password");
    }
  };

  const handleLogout = () => {
    alert("Logged out successfully");
    setPage("login");
  };

  return (
    <>
      {page === "register" && (
        <div className="container">
          <h1>Register</h1>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button onClick={handleRegister}>Register</button>
        </div>
      )}

      {page === "login" && (
        <div className="container">
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Enter Username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {page === "home" && (
        <div className="container">
          <h1>Welcome, {localStorage.getItem("username")}</h1>

          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
}

export default App;