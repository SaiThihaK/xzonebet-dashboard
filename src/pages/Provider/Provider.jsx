import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';


import classes from './Provider.module.css';
import CustomGetFunction from '../../services/CustomGetFunction';
import MemberCard from '../../components/MemberCard/MemberCard';
import CustomLoading from "../../components/CustomLoading/CustomLoading"
import SuperMasterCard from '../SuperMaster/SuperMasterCard/SuperMasterCard';
import CreateMaster from '../../components/UI/Modal/CreateMaster/CreateMaster';
import Card from '../../components/UI/Card';
const Provider = () => {
    const [open, setOpen] = useState(false);
    const [render, setRender] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { data, loading } = CustomGetFunction(`api/agents?sortColumn=id&sortDirection=desc&limit=30&agent_level=provider`, [render]);
    console.log(data);
    return (
        <div className={classes["soccer-setting-container"]}>
            <Card>
                <div className={classes["card-header"]}>
                    <h1 className={classes["card-title"]}>All Provider</h1>
                    <Button onClick={handleOpen} variant="contained">Create</Button>
                </div>
                {
                    loading ? (<div className={classes["card-body"]}>
                        <Grid container spacing={3}>
                            {/* <Grid item key={index} xs={6}>
           </Grid> */}
                            {/* <MemberCard partner={data} route={`/dashboard/account/super-master/detail/${sup.id}`} /> */}
                            {
                                data.map((sup, index) => (
                                    <SuperMasterCard data={sup} key={index} route={`/dashboard/account/provider/${sup.id}`} />
                                ))
                            }
                        </Grid>
                    </div>) : (<CustomLoading />)
                }
            </Card>
            <CreateMaster open={open} type="provider" handleClose={handleClose} render={render} setRender={setRender} />
        </div>
    )
}

export default Provider