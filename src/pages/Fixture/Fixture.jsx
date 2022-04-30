import React, { useState, useEffect } from "react";
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import classes from "./Fixture.module.css";
import TextField from "@mui/material/TextField";

import { DateRangePicker, DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import Country from "../../components/XzonebetFootball/Country";
import League from "../../components/XzonebetFootball/League";
import Team from "../../components/XzonebetFootball/Team";
import FixtureTable from "./FixtureTable/FixtureTable";
import { Button, Grid } from "@mui/material";
import { country, mmBetting } from "../../services/api-services";
import axios from "axios";
import { useSelector } from "react-redux";
import {  getResDate } from "../../Controller/ChangeDate";
import { toast, ToastContainer } from "react-toastify";
import CustomLoading from "../../components/CustomLoading/CustomLoading"

const Fixture = () => {
  const [bettingData, setBettingData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);
  const [leagueId, setLeagueId] = useState([]);
  const [loading,setLoading] = useState(false);
  const leagueIdHandler = (id) => {
    setLeagueId(id);
  };
  const countryName = useSelector((state) => state.country.data);
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  console.log(value)

  let leagueOption =
    countryName !== ""
      ? {
          method: "GET",
          url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
          params: { country: countryName },
          headers: {
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
          },
        }
      : {
          method: "GET",
          url: "https://api-football-v1.p.rapidapi.com/v3/leagues",

          headers: {
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
          },
        };
  useEffect(() => {
    setLoading(false);
    axios
      .request(mmBetting)
      .then(function (response) {
        
        setBettingData(response.data.response);
        setLoading(true);
        // console.log(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(true)
      });

    axios
      .request(country)
      .then(function (response) {
        setCountryData(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(leagueOption)
      .then(function (response) {
        setLeagueData(response.data.response);
        // console.log(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [countryName]);


  const filterData = () => {
   console.log("date",value);
   console.log("leagueId",leagueId)
   if( leagueId.length ===0){
     console.log("it works")
     toast.warning(" need certain date and League to filter");
     return;
   }
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: {
        league: leagueId,
        season: "2021",
        from: getResDate(new Date()),
        to: getResDate(value),
        timezone: "Asia/Yangon",
      },
      headers: {
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
      },
    };

    axios
      .request(options)
      .then(function (response) { 
        setLoading(true);
        setBettingData(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(true);
      });
  };
  // const addLeague=(data)=>{
  //   data.map(el=>{

  //     setLeagueData((element)=>([
  //       ...element,
  //       el.league
  //     ])

  //     )
  //   }) }

  return (
    <PageTitleCard title="Fixture">
      <ToastContainer />
      <div className={classes["card-body"]}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
               <DesktopDatePicker
          label="Choose Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            {country !== [] && <Country country={countryData} />}
          </Grid>
          <Grid item xs={3}>
            <League league={leagueData} leagueIdHandler={leagueIdHandler} />
          </Grid>
          <Grid item xs={2}>
        <div className={classes["btn-container"]}>
         <Button
              variant="contained"
              onClick={filterData}
              size="large"
            >
              Search
            </Button>
         </div>
        </Grid>
        </Grid>
        <div style={{marginTop:20}}>
        { loading ?  (<FixtureTable bettingData={bettingData} />) :(<CustomLoading />)
        }
        </div>

        
      </div>
    </PageTitleCard>
  );
};

export default Fixture;
