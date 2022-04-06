import React, { useEffect, useState } from 'react';
import classes from './UnitValue.module.css';
import { Button, TextField } from '@mui/material';
import Card from '../../../components/UI/Card';
import UnitEditModal from '../../../components/UI/UnitSetting/UnitEditModal';
import UnitChangeModal from '../../../components/UI/UnitSetting/UnitChangeModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { getMethod } from "../../../services/api-services";

const UnitValue = () => {
  const [Kopen, KsetOpen] = React.useState(false);
  const [Kvalue, KsetValue] = useState("1000");
  const KhandleOpen = () => KsetOpen(true);
  const KhandleClose = () => KsetOpen(false);

  const [PUopen, PUsetOpen] = useState(false);
  const [PUvalue, PUsetValue] = useState("30");
  const PUhandleOpen = () => PUsetOpen(true);
  const PUhandleClose = () => PUsetOpen(false);

  const [Mopen, MsetOpen] = useState(false);
  const [Mvalue, MsetValue] = useState("6000");
  const MhandleOpen = () => MsetOpen(true);
  const MhandleClose = () => MsetOpen(false);


  const [unitchangeOpen, setUnitchangeOpen] = useState(false);
  const unitchangeOpenHandler = () => setUnitchangeOpen(true);
  const unitChangeCloseHandler = () => setUnitchangeOpen(false);


  const [userData, setUserData] = useState([]);
  const [getUnitChange, setgetUnitChange] = useState([]);
  const [num, setNum] = useState(0);
  const AlertToast = msg => msg;

  const fetchUnit = async () => {
    try {
      const response = await axios.request(getMethod("api/get-login-user"));
      if (response.data.status === "success") {
        console.log(response.data.data)
        setUserData(response.data.data);
        return;
      }
      if (response.data.status === "error") {
        AlertToast(toast.error(response.data.message));
        return;
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message)
    }

  }
  const getChangeUnit = async () => {
    try {
      const response = await axios.request(getMethod("api/wallet/wallet-setting"));
      console.log(response);
      if (response.data.status === "success") {
        setgetUnitChange(response.data.data);
        return;
      }
      if (response.data.status === "error") {
        AlertToast(toast.error(response.data.message))
        return;
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message)
    }
  }
  useEffect(() => {
    fetchUnit();
    getChangeUnit();
    totalUnit();
  }, [num])

  console.log(userData);

  const totalUnit = () => {
    if (userData && getUnitChange) {
      let totalUnit = userData?.wallet?.main_unit
        + (userData?.wallet?.promotion_unit/getUnitChange?.main_to_promotion_rate)
        + (userData?.wallet?.diamond_unit * userData?.wallet?.main_to_diamond_rate);
      return totalUnit;
    }

  }

  return (
    <div className={classes["soccer-setting-container"]}>
      <ToastContainer />
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Unit Value</h1>
        </div >
        <div className={classes["card-body"]}>
          <h2 className={classes["card-body-title"]}>Total Unit - {totalUnit()}</h2>
          <div className={classes["card-body-container"]}>
            {/* UnitValueDesc */}
            <div className={classes["total-unit-container"]}>
              <div className={classes["form-group"]} >
                <label htmlFor="">Promotion Unit
                </label>:<p>&nbsp;&nbsp;{userData?.wallet?.promotion_unit}</p>
              </div>
              <div className={classes["form-group"]}>
                <label htmlFor="">Main Unit </label>:<p>&nbsp;&nbsp;
                  {userData?.wallet?.main_unit}
                </p>
              </div>
              <div className={classes["form-group"]}>
                <label htmlFor="">Diamond Unit </label>:<p>&nbsp;&nbsp;
                  {userData?.wallet?.diamond_unit}
                </p>
              </div>
            </div>
            <div>
              <div>
                <div className={classes["form-group"]}>
                  <label htmlFor="">1Main </label>:
                  <div>
                    &nbsp;{getUnitChange?.main_unit_value_by_mmk}&nbsp;MMK
                    &nbsp;<Button variant='contained' size="small" onClick={KhandleOpen}  >Edit</Button>
                  </div>
                </div>
                <div className={classes["form-group"]}>
                  <label htmlFor="">1 Main </label>:
                  <div>&nbsp;{getUnitChange?.main_to_promotion_rate}&nbsp;PU
                    &nbsp;<Button variant='contained' size="small" onClick={PUhandleOpen}  >Edit</Button>
                  </div>
                </div>
                <div className={classes["form-group"]}>
                  <label htmlFor="">1 Main </label>:
                  <div>&nbsp;{getUnitChange?.main_to_diamond_rate}&nbsp;DU
                    &nbsp;<Button variant='contained' size="small" onClick={MhandleOpen}  >Edit</Button></div>
                </div>
              </div>
            </div>
            {/* UnitValueDesc */}
          </div>
          <UnitEditModal num={num} setNum={setNum} open={Kopen} value={getUnitChange?.main_unit_value_by_mmk} handleClose={KhandleClose} unitFrom="1Main" unitTo={getUnitChange?.main_unit_value_by_mmk} setValue={KsetValue} unit="MMK" />
          <UnitEditModal num={num} setNum={setNum} open={PUopen} value={getUnitChange?.main_to_promotion_rate} handleClose={PUhandleClose} unitFrom="1Main" unitTo={getUnitChange?.main_to_promotion_rate} setValue={PUsetValue} unit="PU" />
          <UnitEditModal num={num} setNum={setNum} open={Mopen} value={getUnitChange?.main_to_diamond_rate} handleClose={MhandleClose} unitFrom="1Main" unitTo={getUnitChange?.main_to_diamond_rate} setValue={MsetValue} unit="DU" />
        </div>
      </Card>
      <div style={{ widht: "100%", marginTop: 30, display: "flex", justifyContent: "flex-end" }}>
        <Button variant='contained'
          onClick={unitchangeOpenHandler}
          color="primary">Unit Change</Button>
      </div>
      <UnitChangeModal open={unitchangeOpen} handleClose={unitChangeCloseHandler} />
    </div>
  )
}

export default UnitValue