import React from "react";
import classes from "./OpenbetResult.module.css";
import { Grid } from "@mui/material";
import ResultCard from "./ResultCard/ResultCard";
import PageTitleCard from "../../components/UI/PageTitleCard/PageTitleCard";
import CustomGetFunction from "../../services/CustomGetFunction";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
const OpenbetResult = () => {
  const { data, loading } = CustomGetFunction(
    "api/football-fixtures?status=active&source=backend",
    []
  );
  return (
    <PageTitleCard title="Opening bet Result">
      <div className={classes["card-body"]}>
        {loading ? (
          <Grid container rowSpacing={3}>
            {data.map((item, index) => (
                <Grid item xs={4}>
                  <ResultCard key={index} resultData={item} />
                </Grid>
              ))}
          </Grid>
        ) : (
          <CustomLoading />
        )}
      </div>
    </PageTitleCard>
  );
};

export default OpenbetResult;
