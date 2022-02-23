import React, { useEffect, useState } from "react";
import axios from "axios";
import SubTable from "./SubTable/SubTable";
import { globalBetting } from "../../../../../services/api-services";
import classes from "./BetTable.module.css";

const BetTable = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
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
  }, []);

  const num = [1];

  return (
    <div className="betting_table">
      <div>{show && <SubTable data={data} />}</div>
    </div>
  );
};

export default BetTable;
