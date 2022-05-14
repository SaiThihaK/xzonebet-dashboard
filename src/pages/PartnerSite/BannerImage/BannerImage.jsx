import React from 'react'
import PageTitleCard from '../../../components/UI/PageTitleCard/PageTitleCard'
import { TextField } from '@mui/material'
import classes from "./BannerImage.module.css"
const BannerImage = () => {
  return (
    <PageTitleCard title="BannerImage">
        <div className={classes["card-body"]}>
        <div className={classes["form"]}>
          <label>Upload Banner Image</label>
          <TextField fullWidth  variant="standard" type="file" accept="image/png, image/jpeg"  />
        </div>
        <p className={classes["remark"]}>The image should be width 1320px and height 500px</p>
        </div>
    </PageTitleCard>
  )
}

export default BannerImage