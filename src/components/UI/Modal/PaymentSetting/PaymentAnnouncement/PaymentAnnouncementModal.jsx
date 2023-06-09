import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, TextareaAutosize, TextField } from "@mui/material";

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

export default function PaymentAnnouncementModal({
  handleClose,
  open,
  setText
}) {
    const [changeText,setChangeText] = React.useState("");
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
              payment Announcement
            </Typography>
            <FormControl style={{ marginTop: 20 }}>
              <TextField
               onChange={(e)=>setChangeText(e.target.value)}
               size="large"
               variant="outlined"
              />
              <Button
                variant="contained"
                color="success"
                style={{
                  marginTop: 20,
                  width: 80,
                  marginLeft: 200,
                }}
                onClick={() => {
                  handleClose();
                  setText(changeText);
                }}
              >
                Confirm
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
