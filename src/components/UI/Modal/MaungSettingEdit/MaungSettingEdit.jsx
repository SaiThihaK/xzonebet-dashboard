import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import classes from "./MaungSettingEdit.module.css";
const MaungSettingEdit = ({ open, handleClose,title,btnName,btnClick }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    overflowY: "auto",
  maxHeight: "calc(100vh - 100px)",
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {title}
          </Typography>
          <form action="">
            <TextField
              sx={{ width: "100%", mb: 1.5, mt: 2 }}
              size="small"
              id="outlined-basic"
              label="Matches"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", mb: 1.5 }}
              size="small"
              id="outlined-basic"
              label="Tax"
              variant="outlined"
            />
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button variant="contained" color="success" onClick={btnClick}>
              {btnName}
              </Button>
              <Button  onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default MaungSettingEdit;
