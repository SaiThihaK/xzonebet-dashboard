import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./TransferTo.module.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
};

export default function TransferToModal({
  handleClose,
  open,
  toggleClose,
}) {
 
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             Successfully Transfered
            </Typography>
             <div className={classes["btn-container"]}>
             <Button
                variant="contained"
                color="error"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
             </div>
              
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
