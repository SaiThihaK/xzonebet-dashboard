import React from 'react'
import classes from "./HeroContent.module.css"
import PageTitleCard from "../../../components/UI/PageTitleCard/PageTitleCard"
const HeroContent = () => {
  return (
   <PageTitleCard title="Hero Content">
  <div className={classes["card-body"]}>

  </div>
   </PageTitleCard>
  )
}

export default HeroContent