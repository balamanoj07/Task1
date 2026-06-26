import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const loginUsername = useRef();
  const loginPassword = useRef();

  const register = () => {
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

    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");

    setShowLogin(true);
  };

  const login = () => {
    const enteredUsername = loginUsername.current.value;
    const enteredPassword = loginPassword.current.value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (
      enteredUsername === storedUsername &&
      enteredPassword === storedPassword
    ) {
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container">

      {!showLogin ? (
        <>
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

          <button onClick={register}>
            Register
          </button>

          <p>
            Already have an account?{" "}
            <button
              onClick={() => setShowLogin(true)}
              className="linkBtn"
            >
              Login
            </button>
          </p>
        </>
      ) : (
        <>
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Enter Username"
            ref={loginUsername}
          />

          <input
            type="password"
            placeholder="Enter Password"
            ref={loginPassword}
          />

          <button onClick={login}>
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <button
              onClick={() => setShowLogin(false)}
              className="linkBtn"
            >
              Register
            </button>
          </p>
        </>
      )}

    </div>
  );
}

export default App;