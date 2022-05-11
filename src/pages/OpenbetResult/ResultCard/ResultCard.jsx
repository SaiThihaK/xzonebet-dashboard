import { Button, CircularProgress, IconButton } from "@mui/material";
import React, { useState } from "react";
import Card from "../../../components/UI/Card";
import { changeTimestamp } from "../../../Controller/ChangeDate";
import classes from "./ResultCard.module.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { PostMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
import {BiShow} from "react-icons/bi"
import Nodata from "../../../components/Nodata/Nodata";
const ResultCard = ({ resultData }) => {
  const [dataResult, setDataResult] = useState([]);
  const [loading,setLoading] = useState(false);
  const comfirmHandler = async () => {
    if (dataResult.length !==0) {
      return;
    }
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { id: `${resultData.fixture_id}` },
      headers: {
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
      },
    };
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setLoading(false)
        setDataResult(response.data.response[0].goals);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false)
      });
  };
  const fetchDetail = async () => {
    try {
      const { data } = await axios.request(
        PostMethod(`api/football-fixtures/confirm-goals/${resultData.id}`)
      );

      if ((data.status = "success")) {
        toast.success(data.message);
        return;
      }
      if ((data.status = "error")) {
        toast.error(data.message);

        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (
        error.response.status === 401 ||
        error.response.data.message === "Unauthenticated."
      ) {
        logoutHandler();
      }
    }
  };
  return (
    <div className={classes["card"]} >
      <div className={classes["title"]}>
        <p>Premier League</p>
        <p>
          {changeTimestamp(resultData.fixture_timestamp)[0]}
          <br />
          {changeTimestamp(resultData.fixture_timestamp)[1]}
        </p>
      </div>
      <div className={classes["card-body"]}>
        <div className={classes["home-team"]}>
          <img
            with="50"
            height="50"
            src={resultData.over_team_data.logo}
            alt="img"
          />
          <p>{resultData.over_team_data.name}</p>
        </div>
        {
          dataResult?.home ? ( <div className={classes["goals"]}>
          <p className={classes["Homegoal"]}>{dataResult?.home === undefined ? "" : dataResult?.home}</p>
          <p className={classes["bt"]}>-</p>
          <p className={classes["Awaygoal"]}>{dataResult?.away === undefined ? "" : dataResult?.away}</p>
         </div>
  ):(<div>Loading</div>)
        }
       


        <div className={classes["away-team"]}>
          <img
            width="50"
            height="50"
            src={resultData.under_team_data.logo}
            alt="team-logo"
          />
          <p>{resultData.under_team_data.name}</p>
        </div>
      </div>


      <div className={classes["btn-container"]}>
        <Button
          onClick={fetchDetail}
          variant="contained"
          style={{ width: 20, fontSize: 12 }}
        >
          Confirm
        </Button>
        <IconButton onClick={comfirmHandler} 
        ><BiShow /></IconButton>
      </div>
    </div>
  );
};

export default ResultCard;
