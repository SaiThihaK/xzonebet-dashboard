// ---------------------- Fixture Betting ---------------------
import axios from 'axios';
import configsData from '../configs.json';
let dt = new Date();
let year = dt.getFullYear();
let month = (dt.getMonth() + 1).toString().padStart(2, "0");
let day = dt.getDate().toString().padStart(2, "0");

export const fixtureBetting = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
  params: { date: `${year}-${month}-${day}`, season: "2021" },
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": configsData.API_KEY,
  },
};

//---------------------- ODDS By Date -----------------------

export const oddByDate = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/odds',
  params: { date: `${year}-${month}-${day}`, season: "2021",bookmaker: "1" },
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': configsData.API_KEY,
  }
};

//---------------------- ODDS By Bookmaker -----------------------
export const oddByBookmaker = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/odds/bookmakers',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': configsData.API_KEY,
  }
};



 export const betting = {
  method: "GET",
  url: "https://football-pro.p.rapidapi.com/api/v2.0/livescores",
  params: { tz: 'Europe/Amsterdam', include: 'localTeam,visitorTeam' },
  headers: {  
    "x-rapidapi-host": "football-pro.p.rapidapi.com",
    "x-rapidapi-key": "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
  },
};


