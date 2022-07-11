import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import ToDoList from "../pages/ToDoList";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import getUserCredentials from "../actions/login";
// import { getFullName, getUserName } from "../actions/userData";

export default function Login() {
  // const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const onLogin = () => {
    if (username === "ddev" && password === "ddev") {
      setLoginSuccess(true);
      toast.success("Login Successful");
    } else {
      toast("Invalid Credentials");
    }
    // date: new Date().toLocaleString();

    // axios.post(validate_user).then((res) => {
    //   if (res.data.authenticated === true) {
    //     dispatch(getUserName(res.data.username));
    //     dispatch(getFullName(res.data.username));
    //     dispatch(getUserCredentials(res.data));
    //   } else {
    //     alert("Invalid Username or Password");
    //   }
    // });
  };

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {loginSuccess ? (
        <ToDoList />
      ) : (
        <div className="main-login">
          <div className="login">
            <div className="input-login">
              <span style={{ padding: "5px 0px" }}>Enter UserName</span>
              <TextField
                size="small"
                id="outlined-basic"
                onChange={handleUserName}
                variant="outlined"
              />
              <br />
              <span style={{ padding: "5px 0px" }}>Enter Password</span>
              <div>
                <TextField
                  name="password"
                  type="password"
                  fullWidth
                  size="small"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="login-button">
              <Button variant="contained">Reset</Button>
              <Button variant="contained" onClick={onLogin}>
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
