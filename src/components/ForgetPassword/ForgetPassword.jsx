import React, { useState } from "react";
import classes from "./ForgetPassword.module.css";
import RecoveryBy from "./RecoveryBy";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import RecoveryPassword from "./RecoveryPassword/RecoveryPassword";
const ForgetPassword = ({ modal }) => {
  const [tag, setTag] = useState(1);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const handleClose = (state) => {
    setOpen(state);
  };
  const handleOpen = (state) => {
    setOpen(state);
  };
  const steps = ["Enter email or phone", "Verify Code", "Reset your password"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <div
        className={classes["repassword_backdrop"]}
        onClick={() => {
          modal(false);
        }}
      ></div>
      <div className={classes["re_password"]}>
        <Paper elevation={0} />
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={activeStep}
            sx={{ marginTop: "30px" }}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel size="large" sx={{ fontSize: "20px" }}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && (
                <div>
                  <div
                    className={classes["cross"]}
                    onClick={() => {
                      modal(false);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  {/* <h3 className={classes["re_header"]}>FORGET PASSWORD</h3> */}
                  <div className={classes["rev_border"]}>
                    <RecoveryBy
                      handleNext={handleNext}
                      type="email"
                      email={email}
                      setEmail={setEmail}
                      modal={modal}
                    />
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div>
                  <div
                    className={classes["cross"]}
                    onClick={() => {
                      modal(false);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  {/* <h3 className={classes["re_header"]}>FORGET PASSWORD</h3> */}
                  <div className={classes["rev_border"]}>
                    <RecoveryBy
                      type="otp"
                      modal={modal}
                      confirm={confirm}
                      email={email}
                      setConfirm={setConfirm}
                      handleNext={handleNext}
                      handleBack={handleBack}
                    />
                  </div>
                </div>
              )}
              {activeStep === 2 && (
                <div>
                  <div
                    className={classes["cross"]}
                    onClick={() => {
                      modal(false);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  {/* <h3 className={classes["re_header"]}>FORGET PASSWORD</h3> */}
                  <div className={classes["rev_border"]}>
                    <RecoveryPassword
                      RecoveryData={{
                        email_or_phone: email,
                        verification_code: confirm,
                      }}
                      modal={modal}
                    />
                  </div>
                </div>
              )}
              {/* <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box> */}
            </React.Fragment>
          )}
        </Box>
        <Paper />
      </div>

      <ToastContainer />
    </>
  );
};
export default ForgetPassword;
