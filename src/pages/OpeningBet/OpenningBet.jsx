import React, { useEffect, useState } from "react";
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import classes from "./Openningbet.module.css";

import { Avatar, Button, IconButton, Stack } from "@mui/material";
import { ArrowUpward, ArrowDownward, Delete } from "@mui/icons-material";
import NewbetModal from "../../components/UI/Modal/Newbet/NewbetModal";
import CustomGetFunction from "../../services/CustomGetFunction";
import { changeTimestamp } from "../../Controller/ChangeDate";
import NewbetModal1 from "../../components/UI/Modal/Newbet/NewbetModal1";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import {Edit} from "@mui/icons-material"
import axios from "axios";
import { DeleteMethod } from "../../services/api-services";
import { toast } from "react-toastify";
const OpenningBet = () => {
  const { data,loading} = CustomGetFunction("api/football-fixtures", []);
  const [render,setRender] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const openHandler = (id) => {
    setId(id);
    setOpen(true);
  };
  const closeHandler = () => setOpen(false);
  useEffect(()=>{},[render])
  const deleteHandler = async(id)=>{
    try{
      const response = await axios.request(DeleteMethod(`api/football-fixtures/${id}`));
      if(response.data.status === "success"){
        toast.success(response.data.message);
        return;
      }
      if(response.data.status==="error"){
        toast.error(response.data.message);
        setRender(!render);
        return;
      }
    }catch(error){
     toast.error(error.response.date.message);
     return;
    }

  }

  return (
    <PageTitleCard title="Opening Bet">
      <div className={classes["card-body"]}>
        {
          loading ? ( <>
            <Stack direction="row" spacing={7}>
              <div style={{ display: "flex" }}>
                <Avatar
                  size="small"
                  style={{ marginRight: 10 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxKj5LbvxwB1MRqLK74MCI6OCOHbOHutG1A&usqp=CAU"
                  alt="country"
                />
                <span style={{ fontSize: 16, marginTop: 5 }}>England</span>
              </div>
              <div style={{ display: "flex" }}>
                <Avatar
                  size="small"
                  style={{ marginRight: 10 }}
                  src="https://assets.turbologo.com/blog/en/2020/01/19084653/Premier-League-symbol.png"
                  alt="country"
                />
                <span style={{ fontSize: 16, marginTop: 5 }}>Premier League</span>
              </div>
            </Stack>
            <table className={classes["table-container"]}>
              <tr>
                <th></th>
                <th></th>
                <th>H</th>
                <th>A</th>
                <th>O</th>
                <th>Total</th>
                <th>U</th>
                <th></th>
              </tr>
              {data.map((bet, index) => (
                <tr key={index} className={classes["body-row"]}>
                  <td>
                    <p>{changeTimestamp(bet.fixture_timestamp)[0]}</p>
                    <p>{changeTimestamp(bet.fixture_timestamp)[1]}</p>
                  </td>
                  <td className={classes["teams"]}>
                    <p className={classes["t-1"]}>
                      {bet?.over_team_data?.name}
                      <ArrowUpward style={{ fontSize: 14, color: "green" }} />
                    </p>
                    <p className={classes["t-2"]}>
                      {bet?.under_team_data?.name}
                      <ArrowDownward style={{ fontSize: 14, color: "red" }} />
                    </p>
                  </td>
                  <td className={classes["bet-amount"]} align="center">
                    <span>{bet?.body}</span>
                  </td>
                  <td className={classes["bet-amount"]} align="center">
                    <span>{bet?.body}</span>
                  </td>
                  <td className={classes["bet-amount"]} align="center">
                    <span>O</span>
                  </td>
                  <td className={classes["bet-amount"]} align="center">
                    <span>{bet?.total}</span>
                  </td>
                  <td className={classes["bet-amount"]} align="center">
                    <span>U</span>
                  </td>
                  <td align="center">
                    <IconButton onClick={() => {
                        openHandler(index);
                      }}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={()=>deleteHandler(bet.id)}>
                      <Delete />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </table>
          </>):(<CustomLoading />)
        }
       
      </div>
      <NewbetModal1
        open={open}
        bettingData={data[id]}
        closeHandler={closeHandler}
      />
    </PageTitleCard>
  );
};

export default OpenningBet;
