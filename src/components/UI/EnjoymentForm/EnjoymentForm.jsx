import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Card from '../Card'
import PageTitleCard from '../PageTitleCard/PageTitleCard'
import classes from "./EnjoymentForm.module.css"

const EnjoymentForm = (props) => {
  const {name,setName,password,setPassword,deposit,setDeposit,withDraw,setWithDraw} = props;
  return (
      <div style={{marginTop:30}}>
   <Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Enjoyment</h1>
          </div>
          <div className={classes["card-body"]}>
            <div>
              <div>
                <form action="" style={{ width: "500px" }}>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">User Name </label>:
                    <div>
                      &nbsp;&nbsp;
                     
                      <TextField
                        id="standard-basic"
                        label="User Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        sx={{ width: 200 }}
                        variant="standard"
            
                      />
                    </div>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Password </label>:
                    <div>
                      &nbsp;&nbsp;
                        <TextField
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                         
                        label="Password" 
                        sx={{ width: 200 }}
                         
                         variant="standard" />
                     
                    </div>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Deposite percentage </label>:
                    <div>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        vslue={deposit}
                        onChange={(e)=>setDeposit(e.target.value)}
                        label="Deposite Percentage"
                        type="number"
                        sx={{width:200}}
                        variant="standard"
                
                      />
                    </div>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Withdraw Percentage</label>:
                    <div>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        type="number"
                        value={withDraw}
                        onChange={(e)=>setWithDraw(e.target.value)}
                        label="Withdraw Percentage"
                        sx={{ width: 200 }}
                        variant="standard"
                       
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </div>

  )
}

export default EnjoymentForm