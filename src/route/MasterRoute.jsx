import React from "react";
import {  Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import MPaymentAccount from "../Dashboard/MasterDashboard/Page/BankSetting/PaymentAccount/MPaymentAccount";
import EditPaymentAccount from "../pages/PaymentSetting/PaymentAccount/EditPaymentAccount/EditPaymentAccount";
import ADeposite from "../Dashboard/AgentDashboard/Page/Deposite/ADeposite";
import AgentDeposite from "../Dashboard/AgentDashboard/Page/Deposite/AgentDeposite/AgentDeposite";
import MProfile from "../Dashboard/MasterDashboard/Page/Profile/MProfile";
import EditProfile from "../Dashboard/MasterDashboard/Page/Profile/EditProfile/EditProfile";
import TransferTo from "../Dashboard/MasterDashboard/Page/TransferTo/TransferTo";
import MAgent from "../Dashboard/MasterDashboard/Page/Agent/MAgent";
import NewAgent from "../Dashboard/MasterDashboard/Page/Agent/NewAgent/NewAgent";
import CompleteAgent from "../pages/Agent/CompleteAgent/CompleteAgent";
import CompleteAgentDetail from "../pages/Agent/CompleteAgent/CompleteAgentDetail/CompleteAgentDetail";
import NewAgentDetail from "../Dashboard/MasterDashboard/Page/Agent/NewAgent/NewAgentDetail/NewAgentDetail";
import TransitionHistory from "../Dashboard/MasterDashboard/Page/TransitionHistory/TransitionHistory";
import PaymentType from "../pages/PaymentSetting/PaymentType/PaymentType";
import PaymentProvider from "../pages/PaymentSetting/PaymentProvider/PaymentProvider";
import CreatePaymentProvider from "../pages/PaymentSetting/PaymentProvider/CreatePaymentProvider/CreatePaymentProvider";
import EditPaymentProvider from "../pages/PaymentSetting/PaymentProvider/EditPaymentProvider/EditPaymentProvider";
import PaymentAnnouncement from "../pages/PaymentSetting/PaymentAnnoucement/PaymentAnnouncement";
import PaymentAccount from "../pages/PaymentSetting/PaymentAccount/PaymentAccount";
import ConnectWithChat from "../pages/ConnectWithChat/ConnectWithChat";
import Notfound from "../components/UI/404/404";
import Profit from "../pages/Profit/Profit";
import MasterSecurity from "../Dashboard/MasterDashboard/Page/Security/MasterSecurity";
const MasterRoute = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Overview />} />
      <Route
        exact
        path="/dashboard/master/bank-setting/payment-account"
        element={<MPaymentAccount />}
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
    
      <Route
        exact
        path="/dashboard/master/deposite/user-deposite"
        element={<ADeposite />}
      />
      <Route
        exact
        path="/dashboard/master/deposite/agent-deposite"
        element={<AgentDeposite />}
      />
      <Route exact path="/dashboard/master/profile" element={<MProfile />} />
      <Route
        exact
        path="/dashboard/master/profile/edit"
        element={<EditProfile />}
      />
        <Route
        exact
        path="/dashboard/master/security-imformation"
        element={<MasterSecurity />}
      />
       
      <Route
        exact
        path="/dashboard/master/transfer-to"
        element={<TransferTo />}
      />
      <Route exact path="/dashboard/master/agent" element={<MAgent />} />
      <Route
        exact
        path="/dashboard/master/agent/new-agent"
        element={<NewAgent />}
      />
      <Route
        exact
        path="/dashboard/master/agent/agents"
        element={<CompleteAgent />}
      />
      <Route
        exact
        path="/dashboard/account/agent/complete-agent/detail/:id"
        element={<CompleteAgentDetail />}
      />
         <Route path="/dashboard/master/profit" exact element={<Profit type="master" />} />
      <Route
        exact
        path="/dashboard/account/agent/confirm-agent/detail/:id"
        element={<NewAgentDetail />}
      />
      <Route
        exact
        path="/dashboard/master/transition-history"
        element={<TransitionHistory />}
      />
      {/* ----------------------Payment-Setting--------------------- */}
      <Route
        exact
        path="/dashboard/master/payment-setting/payment-value"
        element={<PaymentType />}
      />
      <Route
        exact
        path="/dashboard/master/payment-setting/payment-provider"
        element={<PaymentProvider />}
      />
      <Route
        exact
        path="/dashboard/master/payment-setting/payment-provider/create"
        element={<CreatePaymentProvider />}
      />
      <Route
        exact
        path="/dashboard/master/payment-setting/payment-provider/edit/:id"
        element={<EditPaymentProvider />}
      />
      <Route
        exact
        path="/dashboard/master/payment-setting/payment-announcement"
        element={<PaymentAnnouncement />}
      />
      <Route
        exact
        path="/dashboard/master/payment-setting/payment-account"
        element={<PaymentAccount />}
      />
      <Route
        exact
        path="/dashboard/master/payment-setting/payment-account/edit/:id"
        element={<EditPaymentAccount />}
      />
      {/* <Route
        path="/dashboard/connect-with-chat"
        element={<ConnectWithChat />}
      /> */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default MasterRoute;
