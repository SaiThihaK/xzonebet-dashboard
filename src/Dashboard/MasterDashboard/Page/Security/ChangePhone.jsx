import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
// import usePostRequest from "../../../services/PostRequest";
// import { Logout } from "../../../hooks/Logout";

const ChangePhone = () => {
  const [tag, setTag] = useState(1);
  const [conPass, setConPass] = useState(false);
  const [conEmail, setConEmail] = useState(false);
 
  const [values, setValues] = React.useState({
    emailPassword: "",
    email: "",
    showPassword: false,
  });
 
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const ConfirmPassword = () => {
    if (values.emailPassword === "") {
      toast.error("please enter");
      return;
    }
    let passwordComfirm = {};
    // if (userData.email) {
    //   passwordComfirm = {
    //     email: userData.email,
    //     password: values.emailPassword,
    //   };
    // } else {
    //   passwordComfirm = {
    //     phone: values.phone,
    //     password: values.emailPassword,
    //   };
    // }
   
  };

  const ConfirmEmail = () => {
    if (values.email === "") {
      toast.error("please enter new phone field");
      return;
    }
 
  };
  const ChangeEmailHandler = (e) => {
    e.preventDefault();

  
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div class="rev_body_container ">
      <ToastContainer />
      <form action="" style={{ width: "100%" }}>
        <div class="rev_body" style={{ width: "100%" }}>
          <div>
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
              <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Enter your password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.emailPassword}
                  onChange={handleChange("emailPassword")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Enter your password"
                />
              </FormControl>
              <Button
                variant="contained"
                size="large"
                sx={{ height: "fit-content" }}
                color="error"
                onClick={ConfirmPassword}
              >
                Submit
              </Button>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                width: "100%",
                opacity: conPass ? "1" : "0",
              }}
              spacing={2}
            >
              <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  New Phone
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  label="new phone"
                />
              </FormControl>
              <Button
                variant="contained"
                size="large"
                sx={{ height: "fit-content" }}
                color="error"
                onClick={ConfirmEmail}
              >
                Submit
              </Button>
            </Stack>

            <FormControl
              sx={{ m: 1, width: 300, opacity: conEmail ? "1" : "0" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Enter Opt Code
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="number"
                value={values.opt}
                onChange={handleChange("opt")}
                label="Enter Opt Code"
              />
            </FormControl>

            {/* <div class="rev_form">
                  <input type="text" placeholder="Enter your email" />
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="rev_form">
              <input type="text" placeholder="Enter your email" />
              <i class="fas fa-envelope"></i>
            </div>
            <div class="rev_form">
              <input type="text" placeholder="Enter your email" />
              <i class="fas fa-envelope"></i>
            </div> */}
          </div>
        </div>
        <button
          className={`rev_submit ${!conEmail && "rev_disable"}`}
          disabled={!conEmail}
          type="button"
          onClick={ChangeEmailHandler}
        >
          Create New Email
        </button>
      </form>
    </div>
  );
};

export default ChangePhone;
