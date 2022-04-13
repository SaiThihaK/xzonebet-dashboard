import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, FormControl, Stack, TextField } from "@mui/material";



const XzonebetFootballModal = (props) => {
    const {
    open,
    closeHandler,
    country,
    logo,
    title,
    countryValue,
    setCountryValue,
    setPhoto,
    btnTitle,
    
    } = props;
    
  const style = {
    position: "absolute",
    top: "20%",
    left: "35%",
    transform: "translate(-50%, 6-50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #FFF",
    borderRadius: "0.5rem",
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
         {
             country && (
                 <FormControl fullWidth style={{marginBottom:20}}>
                     <label>Country</label>
                     <TextField size="small" value={countryValue}
                     onChange={(e)=>setCountryValue(e.target.value)}
                     />
                 </FormControl>
             )
         }
         {
             logo && (
                <FormControl fullWidth>
                <label>Choose Provider Logo</label>
                <TextField style={{ border: "none" }}  variant="standard" type="file" accept="image/png, image/jpeg" onChange={(e)=>setPhoto(e.target.files)} />
              </FormControl>
             )
         }

         <Stack direction="row" spacing={7} style={{marginTop:20,display:"flex",justifyContent:"center",alignItems:"center"}}>
             <Button variant="contained">{btnTitle}</Button>
             <Button variant="contained" color="error" onClick={closeHandler}>Cancel</Button>
         </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default XzonebetFootballModal;
