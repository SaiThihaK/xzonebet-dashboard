import React from "react";
import Card from "../../../../../components/UI/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
          <h1 className={classes["card-title"]}>Panding Master Detail</h1>
        </div>
        <div className={classes["card-body"]}>
          <div>
            <div className={classes["agent-user-image-group"]}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                className={classes["agent-user-image"]}
                alt=""
              />
              <div className={classes["agent-user-des"]}>
                <h3>Agent Name</h3>
                <span>ID - 1234567</span>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <form action="" style={{ width: "620px" }}>
                <div className={classes["form-group-desc"]}>
                  <label htmlFor="">Name </label>:
                  <p>
                    &nbsp;&nbsp;
                    {/* <input type="text" /> */}
                    <TextField
                      id="standard-basic"
                      label="Name"
                      sx={{ width: 400 }}
                      variant="standard"
                    />
                  </p>
                </div>
                <div className={classes["form-group-desc"]}>
                  <label htmlFor="">Bank Type </label>:
                  <p>
                    &nbsp;&nbsp;
                    <FormControl variant="standard" sx={{ minWidth: 400 }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Bank Type
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
                        <MenuItem value={10}>AYA</MenuItem>
                        <MenuItem value={20}>KBZ</MenuItem>
                        <MenuItem value={30}>CB</MenuItem>
                      </Select>
                    </FormControl>
                  </p>
                </div>
                <div className={classes["form-group-desc"]}>
                  <label htmlFor="">Bank Name </label>:
                  <p>
                    &nbsp;&nbsp;
                    <TextField
                      id="standard-basic"
                      label="Bank Name"
                      sx={{ width: 400 }}
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
                      sx={{ width: 400 }}
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
                      sx={{ width: 400 }}
                      variant="standard"
                    />
                  </p>
                </div>
                <div className={classes["form-group-desc"]}>
                  <label htmlFor="">Currency </label>:
                  <p>
                    &nbsp;&nbsp;
                    <FormControl variant="standard" sx={{ minWidth: 400 }}>
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
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="contained">report</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PandingMasterDetail;
