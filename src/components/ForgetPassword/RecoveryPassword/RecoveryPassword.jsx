import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import usePost from "../../../../../../../services/Post";
import classes from "./RecoveryPassword.module.css";
import Loading from "../../../../../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";

const crosses = [
  {
    position: "absolute",
    right: "20px",
    top: "10px",
    backgroundColor: "#eee",
    padding: "5px 10px",
    borderRadius: "50%",
    transition: "0.3s",
    cursor: "pointer",
  },
  (theme) => ({
    "&:hover": {
      backgroundColor: "var(--secondary-color)",
      color: "#fff",
    },
  }),
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  p: 4,
  outline: "none",
  borderRadius: "5px",
  overflow: "hidden",
  height: "400px",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
};

export default function RecoveryPassword({ RecoveryData, modal }) {
  const postRequest = usePost();
  const [registerLoading, setRegisterLoading] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(false);
  const [values, setValues] = React.useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const passwordRecoveryHandler = () => {
    setRegisterLoading(true);
    setSubmitDisable(false);
    postRequest("api/account-recovery", { ...RecoveryData, ...values }).then(
      (postData) => {
        const { data, error, message } = postData;
        setRegisterLoading(false);
        if (error) {
          toast.error(error);
          return;
        }
        if (data) {
          toast.success(data);
          modal(false);
        }
      }
    );
  };
  return (
    <div>
      <Box sx={{ position: "realtive", marginTop: "20px" }}>
        {/* <Typography
          id="modal-modal-title"
          variant="h5"
          sx={{ fontSize: "25px", marginBottom: "2px" }}
          component="h5"
        >
          Password Recovery
        </Typography> */}
        <Typography
          id="modal-modal-description"
          sx={{ marginLeft: "50px", fontSize: "17px", mb: 1, mt: 1 }}
        >
          Please enter new password
        </Typography>
        <div className={classes["flex"]}>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
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
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className={classes["flex"]}>
          <FormControl sx={{ m: 1, width: "350px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Comfirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={values.password_confirmation}
              onChange={handleChange("password_confirmation")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Comfirm Password"
            />
          </FormControl>
        </div>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "start",
            marginLeft: "50px",
            color: "var(--main-color)",
          }}
          gutterBottom
          component="div"
        >
          password should contain at least 8 characters one uppercase
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "start",
            marginLeft: "50px",
            color: "var(--main-color)",
          }}
          gutterBottom
          component="div"
        >
          and one lowercase letter and one symbol
        </Typography>

        <div>
          <button
            type="button"
            onClick={passwordRecoveryHandler}
            disabled={submitDisable}
            className={`${classes["submit-register"]} ${
              submitDisable && classes["disable"]
            } `}
          >
            {" "}
            {registerLoading ? <Loading width={30} color="white" /> : "Submit"}
          </button>
        </div>
      </Box>
    </div>
  );
}
