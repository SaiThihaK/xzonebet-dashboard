import React from 'react'
import PageTitleCard from '../../components/UI/PageTitleCard/PageTitleCard'
import classes from "./XzonebetFootball.module.css"
import UserCard from '../Users/UserCard/UserCard';
import {FaRegCalendarAlt} from "react-icons/fa"
import {MdOutlineSportsHandball} from "react-icons/md"
import {RiHandCoinLine} from "react-icons/ri"
import {MdOutlineDateRange} from "react-icons/md"
const XzonebetFootball = () => {
  return (
    <PageTitleCard title="Xzonebet Football">
        <div className={classes["card-body"]}>
        <div className={classes['soccer-setting-content-flex']}>
            <UserCard name="Fixture" bgColor="#ba1e23" path="fixture" icon={<FaRegCalendarAlt style={{fontSize:40}} />} />
            <UserCard name="Opening Bet" bgColor="#ba1e23" path="opening-bet" icon={<MdOutlineSportsHandball style={{fontSize:40}} />} />
            <UserCard name="Bet Result" bgColor="#ba1e23" path="opening-bet-result" icon={<RiHandCoinLine style={{fontSize:40}}/>} />
            <UserCard name="Bet History" bgColor="#ba1e23" path="fixture-bet-history" icon={<MdOutlineDateRange  style={{fontSize:40}}/>}/>
           </div>
        </div>
    </PageTitleCard>
  )
}

export default XzonebetFootball