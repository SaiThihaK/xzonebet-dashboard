import React from "react";
import Notfound from "../components/UI/404/404";
import TransitionHistory from "../Dashboard/MasterDashboard/Page/TransitionHistory/TransitionHistory";
import UserWithDraw from "../pages/UserWithDraw/UserWithDraw";
import ADeposite from "../Dashboard/AgentDashboard/Page/Deposite/ADeposite";
import AgentDeposite from "../Dashboard/AgentDashboard/Page/Deposite/AgentDeposite/AgentDeposite";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import MProfile from "../Dashboard/MasterDashboard/Page/Profile/MProfile";


const AffiliateAgentRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/dashboard" exact  element={<Overview />} />
      <Route
        exact
        path="/dashboard/affiliate-agent/transition-history"
        element={<TransitionHistory />}
      />
      <Route exact path="/dashboard/affiliate-agent/profile" element={<MProfile />} />
      <Route
        exact
        path="/dashboard/agent/user-withdraw"
        element={<UserWithDraw />}
      />
      <Route
        exact
        path="/dashboard/agent/deposite/user-deposite"
        element={<ADeposite />}
      />
      <Route
        exact
        path="/dashboard/agent/deposite/agent-deposite"
        element={<AgentDeposite />}
      />
    </Routes>
  );
};

export default AffiliateAgentRoute;
