import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const MasterDepositCancel = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
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
            Remark
          </Typography>
          <form action="">
            <textarea style={{
                width: '100%',
                outline: 'none',
                border: '1px solid #ababab',
                margin: '10px 0',
                borderRadius: '0.5rem',
                resize: 'none',
                padding: '10px',
                color: "#464646",
                fontSize: '16px'
            }} name="" id="" placeholder="example ...."  rows="5"></textarea>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button variant="contained" type="submit" color="success">
                Confirm
              </Button>
              <Button onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default MasterDepositCancel;
