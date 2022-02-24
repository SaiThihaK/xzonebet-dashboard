import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SubTable from "./SubTable/SubTable";
// import {globalbettingdata} from '../../../../../features/globalbettingtable';
// import { globalBetting } from "../../../../../services/api-services";
import classes from "./BetTable.module.css";
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let todayDate = year + "-" + month + "-" + day;

const BetTable = ({ endDateValue }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  // const dispatch = useDispatch();

  const globalBetting = {
    method: "GET",
    url: `https://football-pro.p.rapidapi.com/api/v2.0/fixtures/between/${todayDate}/${endDateValue}`,
    params: {
      bookmakers: "25679340",
      leagues: "8",
      tz: "Asia/Yangon",
      include: "localTeam,visitorTeam,season,league,odds",
    },
    headers: {
      "x-rapidapi-host": "football-pro.p.rapidapi.com",
      "x-rapidapi-key": "9b4fb89138mshdc697cc5d45c52fp1daa25jsne2be8889fabc",
    },
  };

  useEffect(() => {
    axios
      .request(globalBetting)
      .then(function (res) {
        setData(res.data.data);
        setShow(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [endDateValue]);

  // const {value}  = useSelector((state) => state.globalbetting);
  // useEffect(() => {
  //   dispatch(globalbettingdata());
  //   setShow(true);
  // }, [dispatch]);

  // console.log(value.data)

  return (
    <div className="betting_table">
      <div>{show && <SubTable data={data} />}</div>
    </div>
  );
};

export default BetTable;
