import React,{useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Card from '../../components/UI/Card';
import SuperMasterCard from './SuperMasterCard/SuperMasterCard';
import CreateMaster from '../../components/UI/Modal/CreateMaster/CreateMaster';
import classes from './SuperMaster.module.css';
const SuperMaster = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>All Super Master</h1>
          <Button onClick={handleOpen} variant="contained">Create</Button>
        </div>
        <div className={classes["card-body"]}>
          <Grid container spacing={3}>
             <SuperMasterCard />
          </Grid>
        </div>
      </Card>
      <CreateMaster open={open} handleClose={handleClose}/>
    </div>
  )
}

export default SuperMaster