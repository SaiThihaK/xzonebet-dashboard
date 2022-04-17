import { Button } from '@mui/material'
import React from 'react'
import Card from '../../../components/UI/Card'
import classes from "./ResultCard.module.css"

const ResultCard = () => {
  return (
    <div className={classes["card"]}>
  <div className={classes["title"]}>
      <p>Premier League</p>
      <p>2022-04-02 <br/>20:30:00</p>
  </div>
        <div className={classes["card-body"]}>
        <div>
        <img with="50" height="50" src="https://cdn.sportmonks.com/images/soccer/teams/8/8.png" alt='img' />
        <p>Liver Pool</p>
        </div>
       
        <p>2:1</p>
        <div>
        <img width="50" height="50" src="https://cdn.sportmonks.com/images/soccer/teams/14/14.png" alt="team-logo" />
        <p>Manchester United</p>
        </div>
        </div>
        <div className={classes['btn-container']}>
          <Button variant="contained" style={{width:20,fontSize:12}}>Confirm</Button>
        </div>
    </div>
  )
}

export default ResultCard