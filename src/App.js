import Sidebar, { logoutHandler } from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import { BrowserRouter as Router } from "react-router-dom";
import { type } from "./services/Token";
import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./route/AdminRoute";
import MasterRoute from "./route/MasterRoute";
import AgentRoute from "./route/AgentRoute";
import SuperMasterRoute from "./route/SuperMasterRoute";
import AffiliateAgentRoute from "./route/AffiliateAgentRoute";
import HrRoute from "./route/HrRoute";
import AccountingRoute from "./route/AccountingRoute";
import ProviderRoute from "./route/ProviderRoute";
import Login from "./pages/Login/Login";
function App() {
  const loginStatus = localStorage.getItem("status");
  const DashboardRouting = () => {
    if (type === "admin") {
      return <AdminRoute />;
    }
    //------------------------------------------ Master Dashboard -------------------------------------------------------
    if (type === "master") {
      return <MasterRoute />;
    }
    if (type === "agent") {
      return <AgentRoute />;
    }
    if (type === "super_master") {
      return <SuperMasterRoute />;
    }
    if (type === "affiliate-agent") {
      return <AffiliateAgentRoute />;
    }
    if (type === "hr") {
      return <HrRoute />;
    }
    if (type === "provider") {
      return <ProviderRoute />;
    }
    if (type === "Accounting") {
      return <AccountingRoute />;
    } else {
      logoutHandler();
    }
    // if (type === "agent") {
    //   <Routes>
    //     <Route path="/" exact element={<Overview />} />
    //   </Routes>;
    // }
  };

  return (
    <Router>
      {loginStatus === "success" && <Sidebar />}
      <ToastContainer />
      {loginStatus === "success" ? (
        <Container> {DashboardRouting()} </Container>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
