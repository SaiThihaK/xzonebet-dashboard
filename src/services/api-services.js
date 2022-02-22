// ---------------------- Fixture Betting ---------------------
import configsData from '../configs.json';
 export const betting = {
  method: "GET",
  url: "https://football-pro.p.rapidapi.com/api/v2.0/livescores",
  params: { tz: 'Europe/Amsterdam', include: 'localTeam,visitorTeam' },
  headers: {  
    "x-rapidapi-host": "football-pro.p.rapidapi.com",
    "x-rapidapi-key": configsData.API_KEY,
  },
};


