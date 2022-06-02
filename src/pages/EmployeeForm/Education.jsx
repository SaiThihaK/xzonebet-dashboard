import React, { useState, useEffect } from 'react'
import classes from "./EmployeeForm.module.css"
import { Button, MenuItem, Select, TextField, IconButton } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { getResDate } from '../../Controller/ChangeDate';
import { AiOutlineDelete } from "react-icons/ai";
const Education = ({ setEducation, keys, handleClick, }) => {

    const [eduDegree, setEduDegree] = useState("");
    const [eduSchool, setEduSchool] = useState("");
    const [eduStartDate, setEduStartDate] = useState(new Date());
    const [eduEndDate, setEduEndDate] = useState(new Date());
    const [note, setNote] = useState("");
    useEffect(() => {

        setEducation(prevCount => {
            return {
                ...prevCount,
                [keys]: {
                    degree: eduDegree,
                    school: eduSchool,
                    start_date: getResDate(eduStartDate),
                    end_date: getResDate(eduEndDate),
                    note: note
                }
            }
        })



    }, [eduDegree, eduSchool, eduStartDate, eduEndDate, note])

    return (
        <form className={classes["form"]}>
            {keys !== 0 && (
                <>
                    <div className={classes.another_work} >
                        <h3>Another Education History</h3>
                        <button className={classes["detete-btn"]} onClick={() => {
                            setEducation(pre => {
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
                <div>  <div className={classes["form-Control"]}>
                    <label>Degree</label>
                    <TextField size="small" fullWidth value={eduDegree} onChange={(e) => { setEduDegree(e.target.value) }} />
                </div>
                    <div className={classes["form-Control"]}>
                        <label>Start Date</label>
                        <DatePicker value={eduStartDate} setValue={setEduStartDate} />
                    </div>
                    {/* --------------------------------School---------------------------------------------------- */}
                </div>
                <div>
                    <div className={classes["form-Control"]}>
                        <label>School</label>
                        <TextField size="small" fullWidth value={eduSchool} onChange={(e) => { setEduSchool(e.target.value) }} />
                    </div>

                    {/* --------------------------------------------------End Date------------------------------ */}
                    <div className={classes["form-Control"]}>
                        <label>End Date</label>
                        <DatePicker value={eduEndDate} setValue={setEduEndDate} />
                    </div>
                </div>

            </div>
            {/* ----------------------------------------------------------Form-Date---------------------------------------- */}

            {/*----------------------------------------------Description------------------------------------  */}
            <div className={classes["form-Control-des"]} style={{
                paddingLeft: "20px",
            }}>

                <label style={{
                    width: "70px", marginRight: "20px",
                    marginLeft: "20px"
                }} >Note</label>
                <textarea value={note} onChange={(e) => { setNote(e.target.value) }} style={{
                    marginLeft: "20px"
                }} />
            </div>

        </form>

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

export default Education