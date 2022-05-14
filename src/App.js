import Sidebar, { logoutHandler } from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import { BrowserRouter as Router } from "react-router-dom";
import { type } from "./services/Token";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./Route/AdminRoute";
import MasterRoute from "./Route/MasterRoute";
import AgentRoute from "./Route/AgentRoute";
import SuperMasterRoute from "./Route/SuperMasterRoute";
import AffiliateAgentRoute from "./Route/AffiliateAgentRoute";
import HrRoute from "./Route/HrRoute";
import AccountingRoute from "./Route/AccountingRoute";
function App() {
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
      <Sidebar />
      <ToastContainer />
      <Container>{DashboardRouting()}</Container>
    </Router>
  );
}

export default App;
