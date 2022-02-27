import React from "react";
import Card from "../../../../../components/UI/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SuperMasterDesc from "../../../../SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDesc/SuperMasterDesc";
import classes from "./PandingMasterDetail.module.css";
const PandingMasterDetail = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes["soccer-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Pending Master Form Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <SuperMasterDesc />
        </div>
      </Card>
      <div style={{marginTop: '20px'}}>
        <div className={classes["card-column"]}>
        <Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Initial Deposite Detail</h1>
          </div>
          <div className={classes["card-body"]}>
            <div>
              <div>
                <form action="" style={{ width: "400px" }}>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Name </label>:
                    <p>
                      &nbsp;&nbsp;
                      {/* <input type="text" /> */}
                      <TextField
                        id="standard-basic"
                        label="Name"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Payment Type </label>:
                    <p>
                      &nbsp;&nbsp;
                      <FormControl variant="standard" sx={{ minWidth: 200 }}>
                        <TextField 
                        label="Crypto Currency" 
                        sx={{ width: 200 }}  
                         variant="standard" />
                      </FormControl>
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Payment  Name </label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        label="Payment Name"
                        sx={{width:200}}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Transition ID</label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        label="Transition"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Amount </label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        label="Amount"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Currency </label>:
                    <p>
                      &nbsp;&nbsp;
                      <FormControl variant="standard" sx={{ minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-standard-label">
                          Currency
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={age}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>MMK</MenuItem>
                          <MenuItem value={20}>Dolla</MenuItem>
                          <MenuItem value={30}>Yan</MenuItem>
                        </Select>
                      </FormControl>
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end",marginTop:10 }}>
                    <Button variant="contained">report</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
        {/* Enjoyment detail form */}
        <Card>
          <div className={classes["card-header"]}>
            <h1 className={classes["card-title"]}>Enjoyment</h1>
          </div>
          <div className={classes["card-body"]}>
            <div>
              <div>
                <form action="" style={{ width: "400px" }}>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">User Name </label>:
                    <p>
                      &nbsp;&nbsp;
                      {/* <input type="text" /> */}
                      <TextField
                        id="standard-basic"
                        label="User Name"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Password </label>:
                    <p>
                      &nbsp;&nbsp;
                      <FormControl variant="standard" sx={{ minWidth: 200 }}>
                        <TextField 
                        label="Password" 
                        sx={{ width: 200 }}  
                         variant="standard" />
                      </FormControl>
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Deposite percentage </label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        label="Deposite Percentage"
                        sx={{width:200}}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div className={classes["form-group-desc"]}>
                    <label htmlFor="">Withdraw</label>:
                    <p>
                      &nbsp;&nbsp;
                      <TextField
                        id="standard-basic"
                        label="Withdraw"
                        sx={{ width: 200 }}
                        variant="standard"
                      />
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end",marginTop:10 }}>
                    <Button variant="contained">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Card>
        
        </div>
      </div>
    </div>
  );
};

export default PandingMasterDetail;
