import React from "react";
import classes from "./OpenbetResult.module.css";
import { Grid } from "@mui/material";
import ResultCard from "./ResultCard/ResultCard";
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import CustomGetFunction from "../../services/CustomGetFunction";
const OpenbetResult = () => {
  const { data } = CustomGetFunction("api/football-bettings/result", []);
  console.log(data);
  const arr = ["1", "2", "3", "4", "5"];
  return (
    <PageTitleCard title="Opening bet Result">
      <div className={classes["card-body"]}>
        <Grid container rowSpacing={3}>
          {data.map((item, index) => (
            <Grid item xs={4}>
              <ResultCard key={index} resultData={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </PageTitleCard>
  );
};

export default OpenbetResult;
