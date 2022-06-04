import { Button, MenuItem, Select, TextField, IconButton } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import { toast } from 'react-toastify';
import classes from "./EmployeeDetail.module.css"
// import WorkHistory from './WorkHistory';
// import Education from './Education';
import { useNavigate } from "react-router-dom";
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard';
import CustomGetFunction from '../../../services/CustomGetFunction';
import { useParams } from 'react-router-dom';
import { el } from 'date-fns/locale';
const EmployeeForm = () => {
  const { id } = useParams();
  const { data } = CustomGetFunction(`api/employees/${id}`, [id]);
  console.log(data);
  return (
    <div>
      <h3 className={classes["hr_title"]}>Employee Detail</h3>
      <PageTitleCard none={true} >
        <div className={classes["card-body"]}>


          <form className={classes["form"]}>
            <div className={classes.e_photo}>
              <img src={data?.avatar ? data?.avatar : 'https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg'} alt="admin team account" />
            </div>
            <div className={classes["grid-template"]}>
              <div style={{ marginRight: "50px" }} >
                {/* <div  className={classes["form-Control"]}>
      <label>User Name</label>
      <TextField size="small" fullWidth value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
    </div> */}
                {/* Department */}
                <div className={classes["form-Control"]} >
                  <label>Name</label>
                  <p>{data?.name}</p>
                </div>
                <div className={classes["form-Control"]}>
                  <label>Department</label>
                  <p>{data?.department?.name} </p>
                </div>
                {/* Position */}
                <div className={classes["form-Control"]}>
                  <label>Position</label>
                  <p> {data?.position?.name} </p>
                </div>
                {/* Avatar */}
                {/* <div className={classes["form-Control"]}>
        <label>Choose Provider Logo</label>
        <TextField variant="standard" type="file" accept="image/png, image/jpeg" onChange={logoChange} fullWidth />
            </div> */}
                {/*==================================================Skill=======================================================  */}
                <div className={classes["form-Control-s"]} >
                  <label>Skill</label>
                  <p>{data.skill}</p>
                </div>
                {/* ------------------------------Email---------------------------------- */}

              </div>
              {/*--------------------------Second Part----------------------*/}
              <div style={{ marginLeft: "50px" }}>
                {/* name */}
                <div className={classes["form-Control"]}  >
                  <label>E-mail</label>
                  <p>{data?.email}</p>
                </div>
                {/* -------------------------Phone--------------------------------------- */}
                <div className={classes["form-Control"]}>
                  <label>Phone</label>
                  <p>{data?.phone}</p>
                </div>
                {/* ----------------------Address------------------------------------------ */}
                <div className={classes["form-Control"]}>
                  <label>Address</label>
                  <p>{data?.address}</p>
                </div>
                {/* -----------------------Country--------------------------------------------- */}

                <div className={classes["form-Control"]}>
                  <label>State</label>
                  <p>{data?.state}</p>
                </div>
                {/* -----------------------------City-------------------------------------------- */}
                <div className={classes["form-Control"]}>
                  <label>City</label>
                  <p>{data?.city}</p>
                  {/* <TextField size="small" fullWidth value={city} onChange={(e)=>{setCity(e.target.value)}} /> */}
                </div>
                {/* -------------------------------State--------------------------------------------- */}

              </div>
            </div>
          </form>
          <div className={classes["line-brake"]}>  <hr /></div>

          {/* ------------------------------Working Exp-------------------------------- */}
          <div className={classes["work-flex"]}>
            <h3 className={classes["work-title"]}>Work History</h3>

          </div>
          {data?.work_histories && data?.work_histories.map((el, key) => {
            return (
              < form className={classes["form"]} key={key} >
                <div className={classes["grid-template"]}>
                  <div>
                    <div className={classes["form-Control"]}>
                      <label>Position</label>
                      <p>{el.position}</p>
                    </div>
                    {/* --------------------------------Company---------------------------------------------------- */}
                    <div className={classes["form-Control"]}>
                      <label>Start Date</label>
                      <p>{el.start_date}</p>

                    </div>


                  </div>


                  {/* ----------------------------------------------------------Form-Date---------------------------------------- */}
                  <div>
                    <div className={classes["form-Control"]}>
                      <label>Company Name</label>
                      <p>{el.company_name}</p>
                    </div>
                    {/* -----------------------------Start Date----------------------------------------------------------------- */}
                    <div className={classes["form-Control"]}>
                      <label>End Date</label>
                      <p>{el.end_date}</p>
                    </div>

                    {/* --------------------------------------------------End Date------------------------------ */}


                  </div>

                </div>
                {/*----------------------------------------------Description------------------------------------  */}

                <div style={{ paddingLeft: "20px" }} className={classes["form-Control-s"]}>
                  <label >Description</label>

                  <p>{el.description}</p>
                </div>
              </form >

            )
          })}

          {/* {Array.from(Array(workCount + 1).keys()).map((el, key) => {
            if (showRow.show[key]) {
              return (<WorkHistory setWorkHistory={setWorkHistory} showRow={showRow} keys={key} handleClick={handleClick} />)
            }

          })
          } */}


          <div className={classes["line-brake"]}>  <hr /></div>

          {/* ------------------------------Working Exp-------------------------------- */}
          < div className={classes["work-flex"]} >
            <h3 className={classes["work-title"]}>Education</h3>
          </div>
          {data?.educations && data?.educations.map((el, key) => {
            return (
              <form className={classes["form"]}>

                <div className={classes["grid-template"]}>
                  <div>  <div className={classes["form-Control"]}>
                    <label>Degree</label>
                    {el.degree}
                  </div>
                    <div className={classes["form-Control"]}>
                      <label>Start Date</label>
                      {el.start_date}
                    </div>
                    {/* --------------------------------School---------------------------------------------------- */}
                  </div>
                  <div>
                    <div className={classes["form-Control"]}>
                      <label>School</label>
                      {el.school}
                    </div>

                    {/* --------------------------------------------------End Date------------------------------ */}
                    <div className={classes["form-Control"]}>
                      <label>End Date</label>
                      {el.end_date}
                    </div>
                  </div>

                </div>
                {/* ----------------------------------------------------------Form-Date---------------------------------------- */}
                {/*----------------------------------------------Description------------------------------------  */}
                <div style={{ paddingLeft: "20px" }} className={classes["form-Control-s"]}>
                  <label >Note</label>
                  <p>{el.note}</p>
                </div>
              </form>
            )
          })}

        </div>
      </PageTitleCard >
    </div >

  )
}

export default EmployeeForm


