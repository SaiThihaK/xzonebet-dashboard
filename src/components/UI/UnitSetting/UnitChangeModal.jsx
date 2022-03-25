import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Select, Stack, TextField } from "@mui/material";
import { MenuItem } from "@material-ui/core";
import axios from "axios";
import { getMethod } from "../../../services/api-services";
import { ContactMailTwoTone } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const getUnitChange = async()=>{
    const response = await axios.request(getMethod(""));
    console.log(response);
}



export default function UnitChangeModal({
  handleClose,
  open,
}) {
  const UnitChangeArr = [{name:"Promotion Unit"},{name:"Main Unit"},{name:"Diamond Unit"}];
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
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography variant="h5">
                    Unit Change
                </Typography>
            </div>
            <Typography id="transition-modal-title" variant="body1" style={{color:"var(--secondary-color)"}}>
            you can change promiton unit to main unit , main unit to diamond unit, diamond unit to main unit
            </Typography>
            <FormControl style={{ marginTop: 20}} fullWidth>
              <label style={{marginBottom:10}} >From</label>
              <Select size="small">
               {
                   UnitChangeArr.map((unit,index)=>(
                       <MenuItem value={unit.name} key={index}>
                       {
                           unit.name
                       }
                       </MenuItem>
                   ))
               }
              </Select>
            </FormControl>
            <FormControl style={{ marginTop: 20}} fullWidth>
              <label style={{marginBottom:10}} >To</label>
              <Select size="small">
               {
                   UnitChangeArr.map((unit,index)=>(
                       <MenuItem value={unit.name} key={index}>
                       {
                           unit.name
                       }
                       </MenuItem>
                   ))
               }
              </Select>
            </FormControl>
           <div style={{display:"flex",justifyContent:"flex-end"}}>
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
                  
                }}
              >
                Change
              </Button>
           </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
