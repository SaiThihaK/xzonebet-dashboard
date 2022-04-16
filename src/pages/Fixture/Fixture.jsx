import React, { useState,useEffect } from 'react';
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard"
import classes from "./Fixture.module.css";
import TextField from "@mui/material/TextField"; 

import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box } from '@mui/system';
import Country from '../../components/XzonebetFootball/Country';
import League from '../../components/XzonebetFootball/League';
import Team from '../../components/XzonebetFootball/Team';
import FixtureTable from './FixtureTable/FixtureTable';
import { Button, Grid } from '@mui/material';
import { country, mmBetting } from '../../services/api-services';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ChangeDate, getResDate } from '../../Controller/ChangeDate';

const Fixture = () => {
    const [value,setValue] = useState([null,null]);
   
    const [bettingData,setBettingData]=useState([]);
    const [countryData,setCountryData]=useState([]);
    const [leagueData,setLeagueData]=useState([]);
    const [leagueId,setLeagueId]=useState([]);
    const leagueIdHandler=(id)=>{
      setLeagueId(id);
    }
    const countryName=useSelector(state => state.country.data);
     const DateChangeHandler= (data)=>{
      setValue(data);
    
          
     }
    let leagueOption = (
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
          });
    useEffect(() => {
     
       axios.request(mmBetting).then(function (response) {
        setBettingData(response.data.response)
      
      }).catch(function (error) {
        console.error(error);
      });
     
      axios.request(country).then(function (response) {    
        setCountryData(response.data.response);   
      }).catch(function (error) {
        console.error(error);
      });


      axios.request(leagueOption).then(function (response) {
        setLeagueData(response.data.response)
      console.log(response.data.response);
      }).catch(function (error) {
        console.error(error);
      });
     
    }, [countryName]);
   const filterData=()=>{
     console.log(value,leagueId);
     

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {
    league: leagueId,
    season: '2021',
    from:   getResDate(value[0]),
    to:  getResDate(value[1]),
    timezone: 'Asia/Yangon'
  },
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc'
  }
};

axios.request(options).then(function (response) {
  setBettingData(response.data.response)
}).catch(function (error) {
	console.error(error);
});
   }
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
  <div className={classes["card-body"]}>
  <Grid container spacing={3}>
  <Grid item xs={6}>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
         DateChangeHandler(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps}  variant="standard" />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps}  variant="standard"  />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
    </Grid>
    <Grid item xs={6}>
    {country !== [] && (<Country  country={countryData}/>)}
          
    </Grid>
    <Grid item xs={6}>
    <League league={leagueData}  leagueIdHandler={leagueIdHandler}/>
    </Grid>
    <Grid item xs={6}>
    <Button   variant="contained" onClick={filterData} size="large" sx={{float: "left",height: "50px"}}>Search</Button>
    </Grid>
    {/* <Grid item xs={12}>
   
    </Grid> */}
   
    </Grid>

    {bettingData !== [] && ( <FixtureTable bettingData={bettingData} />)}
   
  </div>
    </PageTitleCard>
  )
}

export default Fixture