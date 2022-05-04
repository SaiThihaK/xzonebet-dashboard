import React,{useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl,Select,MenuItem, TextField, Input } from "@mui/material";


import CountriesSelect from "./CountiesSelect/CountriesSelect";

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

export default function PaymentProviderModal({
  handleClose,
  open,
  setPayment_type,
  setPayment_provider
}) {
  const [type,setType] = useState("E-wallet");
  const [provider,setProvider] = useState("")
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
              Create New Payment Provider
            </Typography>
            <FormControl sx={{ width: "100%" }} style={{marginTop:10}}>
            <Select
              value={type}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              style={{marginBottom:30}}
              sx={{ backgroundColor: "#f3f3f3" }}
            >
              {methods.map((item,index)=>(
                  <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
            </FormControl>
            <TextField size="small" label="Payment Provider" onChange={(e)=>setProvider(e.target.value)} />
            <div style={{marginTop:30}}>
            <label>Choose Provider Logo</label>
            <Input  variant="standard" type="file" accept="image/png, image/jpeg" />
            </div>
             <CountriesSelect />
            <div style={{marginTop: 20,display:"flex",justifyContent:"flex-end"}}>
            <Button
                variant="contained"
                color="success"
                style={{
                  
                  width: 80,
                }}
                onClick={() => {
                  handleClose();
                  setPayment_type(type);
                  setPayment_provider(provider)
                }}
              >
                Create
              </Button>
            </div>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
