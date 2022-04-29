import { Button } from "@mui/material";
import React, { useState } from "react";
import Card from "../../../components/UI/Card";
import { changeTimestamp } from "../../../Controller/ChangeDate";
import classes from "./ResultCard.module.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { PostMethod } from "../../../services/api-services";
import { logoutHandler } from "../../../components/Sidebar/Sidebar";
const ResultCard = ({ resultData }) => {
  const [dataResult, setDataResult] = useState(null);
  const comfirmHandler = async () => {
    if (dataResult !== null) {
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
    axios
      .request(options)
      .then(function (response) {
        setDataResult(response.data.response[0].goals);
      })
      .catch(function (error) {
        console.error(error);
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
    <div className={classes["card"]} onMouseOver={comfirmHandler}>
      <div className={classes["title"]}>
        <p>Premier League</p>
        <p>
          {changeTimestamp(resultData.fixture_timestamp)[0]}
          <br />
          {changeTimestamp(resultData.fixture_timestamp)[1]}
        </p>
      </div>
      <div className={classes["card-body"]}>
        <div>
          <img
            with="50"
            height="50"
            src={resultData.over_team_data.logo}
            alt="img"
          />
          <p>{resultData.over_team_data.name}</p>
        </div>

        <p>
          {`${dataResult?.home === undefined ? "" : dataResult?.home} ${
            dataResult?.away === undefined ? "" : dataResult?.away
          }`}{" "}
        </p>
        <div>
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
          onClick={comfirmHandler}
          variant="contained"
          style={{ width: 20, fontSize: 12 }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ResultCard;
