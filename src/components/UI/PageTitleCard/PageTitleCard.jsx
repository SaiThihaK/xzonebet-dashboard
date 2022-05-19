import React from 'react';
import Card from '../Card';
import classes from "./PageTitleCard.module.css"
const PageTitleCard = ({title,children}) => {

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>{title}</h1>
        </div>
        <div className={classes["card-body"]}>
        {
            children ? children : <div></div>
        }
        </div>
      </Card>
    </div>
  )
}

export default PageTitleCard