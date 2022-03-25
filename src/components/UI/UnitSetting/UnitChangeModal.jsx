import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl,  Select,  TextField } from "@mui/material";
import { MenuItem } from "@material-ui/core";
import axios from "axios";
import { getMethod, PostMethod } from "../../../services/api-services";
import { logoutHandler } from "../../Sidebar/Sidebar";
import { TextFields } from "@mui/icons-material";
import {toast} from "react-toastify"

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


export default function UnitChangeModal({
  handleClose,
  open,
}) {
  const UnitChangeArr = [{name:"Promotion Unit"},{name:"Main Unit"},{name:"Diamond Unit"}];
  const [amount,setAmount] = React.useState();
  React.useEffect(()=>{
    getUnitChange();
    },[])
   
    const getUnitChange = async()=>{
        try{
            const response = await axios.request(getMethod("api/wallet/admin-create-record?sortColumn=id&sortDirection=desc&limit=10"));
            console.log(response);
        }catch(error){
            if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
                logoutHandler();
                }
              }
    }

    const AlertToast = (toast,msg)=>toast(msg);
    const confirmHandler = async()=>{
        try{
            if(!amount){
                AlertToast(toast.warning,"Please fill all the fields")
                return;
            }
       else{
        const response = await axios.request(PostMethod("api/wallet/admin-create"),{
         amount
        });
        console.log(response);
        if(response.data.status==="success"){
            AlertToast(toast.success,response.data.message);
            handleClose();
            return;
        };
        if(response.data.status === "error"){
            AlertToast(toast.error,response.data.message);
            handleClose();
            return;
        }
       }
        }catch(error){
            if (error.response.status === 401 || error.response.data.message === "Unauthenticated.") {
                logoutHandler();
                }
              }
        }



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
            you can change Promiton unit to Main unit , Main unit to Diamond unit, Diamond unit to Main unit
            </Typography>
            <FormControl style={{ marginTop: 20}} fullWidth>
              <label component="span"  style={{marginBottom:10}} >From</label>
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
            <FormControl style={{ marginTop: 20}} fullWidth>
              <label style={{marginBottom:10}} >Enter your Amount</label>
              <TextField size="small" value={amount} onChange={(e)=>{
                  setAmount(e.target.value)
              }}  />
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
