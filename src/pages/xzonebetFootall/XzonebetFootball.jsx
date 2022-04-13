import { Button } from '@mui/material'
import React, { useState } from 'react'

import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import UserCard from '../Users/UserCard/UserCard';
import classes from "./XzonebetFootball.module.css";
const XzonebetFootball = () => {

  return (
<PageTitleCard title="XzoneBet-Football Setting">
  <div className={classes['card-body']}>
  <div className={classes['soccer-setting-content-flex']}>
            <UserCard name="Country" bgColor="#2ED8B6" path="/game-setting/xzonebet-football-setting/country" />
            <UserCard name="Leagues" bgColor="#2ED8B6" path="/game-setting/xzonebet-football-setting/leagues" />
            <UserCard name="Teams" bgColor="#2ED8B6" path="/game-setting/xzonebet-football-setting/teams" />
            <UserCard name="Fictures" bgColor="#2ED8B6" path="/game-setting/xzonebet-football-setting/ficture-setting" />
           </div>
  </div>
</PageTitleCard>
  )
}

export default XzonebetFootball