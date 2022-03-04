import React,{useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl,Select,MenuItem, TextField } from "@mui/material";

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
};

export default function PaymentTypeModal({
  handleClose,
  open,
  setPayment_type

}) {
  const [type,setType] = useState("");
  const methods = [{name:"E-wallet"},{name:"Banking"},{name:"PayPal"}]
  const handleChange = (e)=>setType(e.target.value);
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
              Create New Payment
            </Typography>
            <FormControl sx={{ width: "100%" }} style={{marginTop:10}}>
            <TextField
              value={type}
              onChange={handleChange}
              displayEmpty
              label="Create Payment Type"
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              sx={{ backgroundColor: "#f3f3f3" }}
            >
            </TextField>
            <div style={{marginTop: 20,display:"flex",justifyContent:"flex-end"}}>
            <Button
                variant="contained"
                color="success"
                style={{
                  
                  width: 80,
                }}
                onClick={() => {
                  handleClose();
                  setPayment_type(type)
                }}
              >
                Create
              </Button>
            </div>
             
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
