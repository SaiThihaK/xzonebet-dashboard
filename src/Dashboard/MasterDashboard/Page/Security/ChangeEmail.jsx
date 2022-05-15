import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";


const ChangeEmail = () => {
  const [tag, setTag] = useState(1);
  const [conPass, setConPass] = useState(false);
  const [conEmail, setConEmail] = useState(false);
  // const dispatch = useDispatch();
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
    // postMethod(`api/login`, passwordComfirm).then((data) => {
    //   const { postData, errors: eMessage } = data;
    //   if (postData) {
    //     toast.success("password correct");
    //     setConPass(true);
    //     return;
    //   }
    //   if (eMessage) {
    //     toast.error("invalid password");
    //     return;
    //   }
    // });
  };

  const ConfirmEmail = () => {
    if (values.email === "") {
      toast.error("please enter new email field");
      return;
    }
    // postMethod(`api/send-email-otp`, { email: values.email }).then((data) => {
    //   const { postData, errors: eMessage } = data;
    //   if (postData) {
    //     toast.success("Send Otp code successfully");
    //     setConEmail(true);
    //     return;
    //   }
    //   if (eMessage) {
    //     toast.error("please enter correct email");
    //     return;
    //   }
    // });
  };
  const ChangeEmailHandler = (e) => {
    e.preventDefault();

    // postMethod(`api/change-email-or-phone`, {
    //   old_password: values.emailPassword,
    //   email_or_phone: values.email,
    //   verification_code: values.opt,
    // }).then((data) => {
    //   const { postData, errors: eMessage } = data;

    //   if (eMessage) {
    //     toast.error(eMessage);

    //     return;
    //   } else {
    //     toast.success("Email change successfully");
    //     setValues({
    //       emailPassword: "",
    //       email: "",
    //       opt: "",
    //       showPassword: false,
    //     });
    //     setConEmail(false);
    //     setConPass(false);
    //     logout();
    //   }
    // });
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
                        onC
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
                  New Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  label="new email"
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

export default ChangeEmail;
