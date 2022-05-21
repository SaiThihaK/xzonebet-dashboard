import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, TextField } from "@mui/material";
import { PatchMethod } from "../../../services/api-services";
import axios from "axios";
import { toast } from "react-toastify";

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

export default function UnitEditModal({
  handleClose,
  open,
  unitTo,
  unitFrom,

  unit,

  setNum,
  num,
}) {
  const [changeValue, setChangeValue] = React.useState("");
  const AlertToast = (msg) => msg;
  const differUnit = () => {
    if (unit === "MMK") {
      return { main_unit_value_by_mmk: changeValue };
    }
    if (unit === "PU") {
      return { main_to_promotion_rate: changeValue };
    }
    if (unit === "Main") {
      return { main_to_diamond_rate: changeValue };
    }
    return "false";
  };
  console.log("unitTo", unitTo);
  const PatchUnitChange = async () => {
    try {
      const response = await axios.request(
        PatchMethod("api/wallet/wallet-setting", differUnit())
      );
      if (response.data.status === "success") {
        AlertToast(toast.success(response.data.message));
        setNum(num + 1);
        handleClose();
        return;
      }
      if (response.data.status === "error") {
        AlertToast(toast.error(response.data.message));
        return;
      }
    } catch (error) {
      console.log(error);
      AlertToast(toast.error(error.response.data.message));
    }
  };

  console.log(differUnit());
  console.log("value", changeValue);

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
              Unit Value({`${unitFrom}-${unitTo}${unit}`})
            </Typography>
            <FormControl style={{ marginTop: 20 }}>
              <TextField
                type="number"
                onChange={(e) => setChangeValue(e.target.value)}
                value={changeValue}
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
                  // handleClose();
                  // setValue(changeValue);
                  PatchUnitChange();
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
