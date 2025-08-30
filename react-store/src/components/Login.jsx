import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const Navigate = useNavigate();
  const { user, setUser, users, setUsers, cart } = useContext(appContext);
  const [msg, setMsg] = useState();
  const API = process.env.REACT_APP_API;
  const handleSubmit = async () => {
    try {
      const url = `${API}/api/user/login`;
      const result = await axios.post(url, user);
      Navigate("/");
    } catch (err) {
      console.log(err);
      setMsg("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      {msg}
      <p>
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        ></input>
      </p>
      <p>
        <button onClick={handleSubmit}>Log In</button>
      </p>
      <p>
        <Link to="../register">New User Register Here!</Link>
      </p>
    </div>
  );
}
