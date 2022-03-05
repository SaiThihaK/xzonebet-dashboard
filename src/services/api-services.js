import configsData from "../configs.json";
import { ltoken } from "./Token";

let dt = new Date();
let year = dt.getFullYear();
let month = (dt.getMonth() + 1).toString().padStart(2, "0");
let day = dt.getDate().toString().padStart(2, "0");

// ------------------------Login API ---------------------------
export const login = {
  method: "post",
  url: `${configsData.DOMAIN}/api/login`,
  headers: {
    Accept: "application/json",
  },
};
// ---------------------- Fixture Betting ---------------------
export const betting = {
  method: "GET",
  url: "https://football-pro.p.rapidapi.com/api/v2.0/livescores",
  params: {
    tz: "Asia/Yangon",
    include: "localTeam,visitorTeam,league",
  },

  headers: {
    "x-rapidapi-host": "football-pro.p.rapidapi.com",
    "x-rapidapi-key": configsData.API_KEY,
  },
};

// ------------------------------ Global Betting Table ----------------------

export const globalBetting = {
  method: "GET",
  url: "https://football-pro.p.rapidapi.com/api/v2.0/fixtures/between/2022-2-21/2022-2-28",
  params: {
    bookmakers: "25679340",
    leagues: "8",
    tz: "Asia/Yangon",
    include: "localTeam,visitorTeam,season,league,odds",
  },
  headers: {
    "x-rapidapi-host": "football-pro.p.rapidapi.com",
    "x-rapidapi-key": "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
  },
};

// ----------------------------All Countries------------------------------------

export const Countries = {
  method: "GET",
  url: "https://api-football-v1.p.rapidapi.com/v3/countries",
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
  },
};

// ------------------------------------Crypto-Currency-------------------
export const Crypto = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`",
};

// -------------------------Default Headers----------------------------------//
export const getMethod = (route) => {
  const res = {
    method: "GET",
    url: `${configsData.DOMAIN}${route}`,
    headers: {
      Accept: "application/json",
      Authorization: ltoken,
    },
  };
  return res;
};

export const PostMethod = (route) => {
  const res = {
    method: "POST",
    url: `${configsData.DOMAIN}${route}`,
    headers: {
      Accept: "application/json",
      authorization: ltoken,
    },
  };
};
