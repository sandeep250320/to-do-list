import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./login.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (values) => (e) => {
    setValues(...values, e.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="login">
        <div className="input-login">
          <span style={{ padding: "5px 0px" }}>Enter UserName</span>
          <TextField size= "small" id="outlined-basic"  variant="outlined" />
          <br />
          <span style={{ padding: "5px 0px" }}>Enter Password</span>
          <FormControl size="small" variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="login-button">
          <Button variant="contained">Reset</Button>
          <Button variant="contained">Login</Button>
        </div>
      </div>
    </>
  );
}
