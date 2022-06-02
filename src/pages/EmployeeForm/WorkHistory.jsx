import React, { useState, useEffect } from 'react'
import classes from "./EmployeeForm.module.css"
import { Button, MenuItem, Select, TextField, IconButton, clear } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { AiOutlineDelete } from "react-icons/ai";
import { getResDate } from '../../Controller/ChangeDate';
const WorkHistory = ({ setWorkHistory, keys, handleClick }) => {
    const [expPosition, setExpPosition] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [expStartDate, setExpStartDate] = useState(new Date());
    const [expEndDate, setExpEndDate] = useState(new Date());
    const [description, setDescription] = useState("");

    useEffect(() => {


        setWorkHistory(prevCount => {
            return {
                ...prevCount,
                [keys]: {
                    position: expPosition,
                    company_name: companyName,
                    start_date: getResDate(expStartDate),
                    end_date: getResDate(expEndDate),
                    description: description
                }
            }
        })

    }, [expPosition, companyName, expStartDate, expEndDate, description])


    return (
        < form className={classes["form"]} >
            {keys !== 0 && (
                <>
                    <div className={classes.another_work} >
                        <h3>Another Work History</h3>
                        <button className={classes["detete-btn"]} onClick={() => {
                            setWorkHistory(pre => {
                                delete pre[keys];
                                return pre;
                            }); handleClick(keys);
                        }}>
                            <p>  Delete</p>

                            <AiOutlineDelete style={{ color: "#fff", fontSize: "20px", cursor: "pointer", marginLeft: "5px" }} />
                        </button>
                    </div>


                    {/* <AiFillDelete style={{ color: "red", float: "right", fontSize: "25px", cursor: "pointer" }} />
                    <div style={{ clear: "both" }}></div> */}
                </>
            )
            }

            <div className={classes["grid-template"]}>
                <div>

                    <div className={classes["form-Control"]}>
                        <label>Position</label>
                        <TextField size="small" fullWidth value={expPosition} onChange={(e) => { setExpPosition(e.target.value) }} />
                    </div>
                    {/* --------------------------------Company---------------------------------------------------- */}
                    <div className={classes["form-Control"]}>
                        <label>End Date</label>
                        <DatePicker value={expEndDate} setValue={setExpEndDate} />
                    </div>
                </div>


                {/* ----------------------------------------------------------Form-Date---------------------------------------- */}
                <div>
                    <div className={classes["form-Control"]}>
                        <label>Company Name</label>
                        <TextField size="small" fullWidth value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} />
                    </div>
                    {/* -----------------------------Start Date----------------------------------------------------------------- */}
                    <div className={classes["form-Control"]}>
                        <label>Start Date</label>
                        <DatePicker value={expStartDate} setValue={setExpStartDate} />
                    </div>

                    {/* --------------------------------------------------End Date------------------------------ */}


                </div>
            </div>
            {/*----------------------------------------------Description------------------------------------  */}

            <div className={classes["form-Control-des"]} style={{
                paddingLeft: "20px",
            }}>

                <label style={{
                    width: "70px", marginRight: "20px",
                    marginLeft: "20px"
                }} >Description</label>


                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} style={{
                    marginLeft: "20px"
                }} />

            </div>
        </form >

    )
}
export const DatePicker = ({ value, setValue }) => {
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (<LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} fullWidth size='small' />}
        />
    </LocalizationProvider>)
}

export default WorkHistory