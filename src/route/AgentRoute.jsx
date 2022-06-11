import React from "react";
import { Route, Routes } from "react-router-dom";
import ABankAccount from "../Dashboard/AgentDashboard/Page/BankAccount/ABankAccount";
import ADeposite from "../Dashboard/AgentDashboard/Page/Deposite/ADeposite";
import AgentDeposite from "../Dashboard/AgentDashboard/Page/Deposite/AgentDeposite/AgentDeposite";
import TransferTo from "../Dashboard/MasterDashboard/Page/TransferTo/TransferTo";
import ATransitionHistory from "../Dashboard/AgentDashboard/Page/TransitionHistory/ATransitionHistory";
import UserWithDraw from "../pages/UserWithDraw/UserWithDraw";
import PaymentAccount from "../pages/PaymentSetting/PaymentAccount/PaymentAccount";
import EditPaymentAccount from "../pages/PaymentSetting/PaymentAccount/EditPaymentAccount/EditPaymentAccount";
import Users from "../pages/Users/Users";
import ActiveUser from "../pages/Users/ActiveUsers/ActiveUsers";
import AllUser from "../pages/Users/AllUser/AllUser";
import UserDetail from "../pages/Users/UserDetail/UserDetail";
import Profit from "../pages/Profit/Profit";
import Notfound from "../components/UI/404/404";
import Overview from "../pages/Overview";
import MProfile from "../Dashboard/MasterDashboard/Page/Profile/MProfile";


const AgentRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" exact element={<Overview />} />
      <Route
        exact
        path="/dashboard/agent/bank-account"
        element={<ABankAccount />}
      />
      <Route
        exact
        path="/dashboard/agent/deposite/user-deposite"
        element={<  ADeposite />}
      />
      <Route
        exact
        path="/dashboard/agent/deposite/agent-deposite"
        element={<AgentDeposite />}
      />
      <Route
        exact
        path="/dashboard/agent/transfer-to"
        element={<TransferTo />}
      />
      <Route
        exact
        path="/dashboard/agent/transition-history"
        element={<ATransitionHistory />}
      />
      <Route
        exact
        path="/dashboard/agent/user-withdraw"
        element={<UserWithDraw />}
      />

      <Route
        exact
        path="/dashboard/payment-setting/payment-account"
        element={<PaymentAccount />}
      />
      <Route
        exact
        path="/dashboard/payment-setting/payment-account/edit/:id"
        element={<EditPaymentAccount />}
      />
      <Route path="/dashboard/account/user" exact element={<Users />} />
      <Route
        path="/dashboard/account/user/active-user"
        exact
        element={<ActiveUser />}
      />
      <Route
        path="/dashboard/account/user/all-user"
        exact
        element={<AllUser />}
      />
      <Route
        path="/dashboard/account/user/user-detail/:id"
        exact
        element={<UserDetail />}
      />
      <Route path="/dashboard/profit" exact element={<Profit />} />
      <Route exact path="/dashboard/agent/profile" element={<MProfile />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AgentRoute;
