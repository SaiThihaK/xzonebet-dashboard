import React, { useState, useRef, useEffect } from "react";
import usePost from "../../../../../../services/Post";
import Loading from "../../../../../Loading/Loading";
import classes from "./ForgetPassword.module.css";
import { ToastContainer, toast } from "react-toastify";

import RecoveryPassword from "./RecoveryPassword/RecoveryPassword";

const RecoveryBy = ({
  handleNext,
  type,
  handleBack,
  email,
  setEmail,
  confirm,
  setConfirm,
}) => {
  console.log(type);
  const [open, setOpen] = useState(false);
  const handleClose = (state) => {
    setOpen(state);
  };
  const [counter, setCounter] = useState(0);
  const [otpLoading, setOtpLoading] = useState(false);
  // const email = useRef("");

  const [validationError, setValidationError] = useState("");
  const [sendText, setSendText] = useState("Send Code");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(true);
  const [showComfirmBtn, setShowComfirmBtn] = useState(true);
  const postRequest = usePost();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };
  let passwordData = {
    email_or_phone: email,
    verification_code: confirm,
  };

  const PasswordChangeHandler = (event, handleNext) => {
    event.preventDefault();
    setRegisterLoading(true);
    setSubmitDisable(true);
    console.log(passwordData);

    if (!passwordData.email_or_phone && !passwordData.verification_code) {
      toast.error("please fill all the field");
      setRegisterLoading(false);
      return;
    }
    postRequest("api/check-otp", passwordData).then((getData) => {
      setRegisterLoading(false);
      setSubmitDisable(false);
      const { data, error, message } = getData;
      if (data) {
        toast.success(message);
        handleNext();

        return;
      }

      if (error) {
        toast.error(error);
      }
    });
  };
  const sendOtp = (event, handleNext) => {
    event.preventDefault();
    setOtpLoading(true);
    if (email === "") {
      setOtpLoading(false);
      toast.error("Please fill all the field");
      return;
    }
    let otpBody = {};
    let isNumber = [...email].every((c) => "0123456789".includes(c));
    if (isNumber) {
      otpBody = { phone: email };
    } else {
      otpBody = { email: email };
    }

    postRequest(`api/send-sms-otp`, otpBody).then((getData) => {
      const { data, error, message } = getData;
      setOtpLoading(false);
      if (data) {
        toast.success(message);
        handleNext();

        // setShowComfirmBtn(false);
        // setSubmitDisable(false);
        // setCounter(59);
        // setSendText("Send Again");
        return;
      }
      if (error) {
        toast.error(error);
        return;
      }
    });
  };
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className={classes["rev_body_container"]}>
      <form
        action=""
        onSubmit={(event) => {
          type === "email"
            ? sendOtp(event, handleNext)
            : PasswordChangeHandler(event, handleNext);
        }}
      >
        <div className={classes["rev_body"]}>
          <div>
            {type === "email" && (
              <>
                {" "}
                <div>
                  <label htmlFor="" className={classes["fog-lable"]}>
                    Enter email or password
                  </label>
                </div>
                <div className={classes["form-flex"]}>
                  <div>
                    <div className={classes["input-phone"]}>
                      <input
                        type="text"
                        value={email}
                        placeholder="Enter email or passsowrd"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {type === "otp" && (
              <>
                <div>
                  <label htmlFor="" className={classes["fog-lable"]}>
                    Enter your code
                  </label>
                </div>
                <div
                  className={`${classes["form-flex"]} 
                  `}
                >
                  <div>
                    <div className={classes["input-comfrim"]}>
                      <input
                        type="text"
                        placeholder="Confirmation code"
                        value={confirm}
                        onChange={handleConfirmChange}
                      />
                    </div>
                  </div>
                </div>
                {validationError.hasOwnProperty("verification_code") && (
                  <small className={classes["error"]}>
                    {validationError.verification_code[0]}
                  </small>
                )}
              </>
            )}
            {type === "otp" && (
              <>
                <div className="">
                  <button
                    type="submit"
                    disabled={otpLoading}
                    className={`${classes["back-register"]}`}
                    onClick={handleBack}
                  >
                    Back
                  </button>
                </div>
                <div className="">
                  <button
                    type="submit"
                    disabled={registerLoading}
                    className={`${classes["submit-register"]}`}
                  >
                    {registerLoading ? (
                      <Loading width={30} color="white" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </>
            )}
            {type === "email" && (
              <div className="">
                <button
                  type="submit"
                  disabled={otpLoading}
                  className={`${classes["submit-register"]}`}
                >
                  {otpLoading ? <Loading width={30} color="white" /> : "Submit"}
                </button>
              </div>
            )}
          </div>

          {/* <div className={classes["rev_warning"]}>
            <p>To recover your password, enter the e-mail address you used for registration.</p>
            <p>We will send you an e-mail with further instructions.</p>
        </div> */}
        </div>
      </form>
    </div>
  );
};

export default RecoveryBy;
