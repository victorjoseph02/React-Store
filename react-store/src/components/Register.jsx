import React from "react";
import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { appContext } from "../App";
export default function Register() {
  const { user, setUser, users, setUsers, cart } = useContext(appContext);
  const [msg, setMsg] = useState();
  const Navigate = useNavigate();
  const API = process.env.REACT_APP_API;
  const handleSubmit = async () => {
    try {
      const url = `${API}/api/user/register`;
      const result = await axios.post(url, user);
      Navigate("/login")
    } catch (err) {
      console.log(err);
      setMsg("Something went wrong");
    }
    const found = users.find((value) => value.email === user.email);
  };
  const handleDelete = (email) => {
    setUsers(users.filter((value) => value.email != email));
  };
  return (
    <div className="App-Register-Row">
      <div>
        <h2>Registration Form</h2>
        {msg}
        <p>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </p>
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
            placeholder="New password"
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
          ></input>
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Log In</Link>
        </p>
      </div>
    </div>
  );
}
