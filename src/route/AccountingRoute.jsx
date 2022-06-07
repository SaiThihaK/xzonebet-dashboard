import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "../components/UI/404/404";
import Overview from "../pages/Overview";
import MasterDeposit from "../pages/MasterDeposit/MasterDeposit";
import AccountTitle from "../pages/AccountTitle/AccountTitle";
import AccountData from "../pages/AccountData/AccountData";
import Allbetincome from "../pages/AllBetIncome/Allbetincome";
import AllBetoutcome from "../pages/AllBetoutcome/AllBetoutcome";


const AccountingRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/dashoard" exact element={<Overview />} />
      <Route
        path="/dashboard/accounting/deposit"
        exact
        element={<MasterDeposit />}
      />
      <Route path="/dashboard/account-title" exact element={<AccountTitle />} />
      <Route path="/dashboard/account-data" exact element={<AccountData />} />
      <Route
        path="/dashboard/all-bet-income"
        exact
        element={<Allbetincome />}
      />
      <Route
        path="/dashboard/all-bet-outcome"
        exact
        element={<AllBetoutcome />}
      />
    </Routes>
  );
};

export default AccountingRoute;
