import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@mui/material"
import classes from "./MemberCard.module.css"

const MemberCard = ({ partner, path, status }) => {
  console.log("partner", partner);
  const navigate = useNavigate();
  return (
    <div className={classes["card"]}>
      <Card>
        {/* <Link to={path+partner?.id || "1"}>  */}
        <div className={classes["container"]}>
          <div className={classes["img-container"]}>
            <img src='https://icon-library.com/images/user-icon-jpg/user-icon-jpg-14.jpg' alt="admin team account" />
          </div>
          <div className={classes["form-container"]}>
            <div className={classes["form-group-desc"]}>
              {
                partner?.name ? (<>
                  <label htmlFor="">Name </label>:<p>&nbsp;&nbsp;{partner?.name}</p>
                </>) : (
                  <>
                    <label htmlFor="">Name </label>:<p>&nbsp;&nbsp;{partner?.first_name + " " + partner?.last_name || ""}</p>
                  </>
                )
              }

            </div>
            <div className={classes["form-group-desc"]}>
              <label htmlFor="">Email </label>:<p>&nbsp;&nbsp;{partner?.email || ""}</p>
            </div>
            <div className={classes["form-group-desc"]}>
              <label htmlFor="">Phone </label>:<p>&nbsp;&nbsp;{partner?.phone || ""}</p>
            </div>
            {
              status && <div className={classes["form-group-desc"]}>
                <label htmlFor="">Type </label>:<p>&nbsp;&nbsp;{partner?.form_type || ""}</p>
              </div>
            }
          </div>

        </div>
        <div className={classes["btn-container"]}>
          <button className={classes["btn"]} onClick={() => navigate(path + partner?.id)} >More Detail</button>
        </div>
      </Card>
    </div>
  )
}

export default MemberCard