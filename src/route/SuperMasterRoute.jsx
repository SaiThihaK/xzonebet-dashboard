import React from "react";
import { Route, Routes } from "react-router-dom";
import Transition from "../components/Table/Complete/Transition/Transiton";
import Notfound from "../components/UI/404/404";
import TransferTo from "../Dashboard/MasterDashboard/Page/TransferTo/TransferTo";
import PaymentAccount from "../pages/PaymentSetting/PaymentAccount/PaymentAccount";
import EditPaymentAccount from "../pages/PaymentSetting/PaymentAccount/EditPaymentAccount/EditPaymentAccount";
import ATransitionHistory from "../Dashboard/AgentDashboard/Page/TransitionHistory/ATransitionHistory";
import UserWithDraw from "../pages/UserWithDraw/UserWithDraw";
import Master from "../pages/Master/Master";
import AffiliateAgent from "../pages/Affiliate Agent/AffiliateAgent";
import PendingAffiliateAgent from "../pages/Affiliate Agent/PendingAffiliateAgent/PendingAffiiliateAgent";
import PendingAffiliateAgentDetail from "../pages/Affiliate Agent/PendingAffiliateAgent/PendingAffiliateAgentDetail/PendingAffiliateAgentDetail";
import Agent from "../pages/Agent/Agent";
import PendingAgent from "../pages/Agent/PendingAgent/PendingAgent";
import PendingAgentDetail from "../pages/Agent/PendingAgent/PendingAgentDetail/PendingAgentDetail";
import ConfirmAgent from "../pages/Agent/ConfirmAgent/ConfirmAgent";
import ConfirmAgentDetail from "../pages/Agent/ConfirmAgent/ConfirmAgentDetail.jsx/ConfirmAgentDetail";
import CompleteAgent from "../pages/Agent/CompleteAgent/CompleteAgent";
import CompleteAgentDetail from "../pages/Agent/CompleteAgent/CompleteAgentDetail/CompleteAgentDetail";
import CancelAgent from "../pages/Agent/CancelAgent/CancelAgent";
import CancelAgentDetail from "../pages/Agent/CancelAgent/CancelAgentDetail/CanceclAgentDetail";
import AgentTransition from "../components/Table/AgentTransiton/AgentTransition";
import PandingMaster from "../pages/Master/PandingMaster/PandingMaster";
import PandingMasterDetail from "../pages/Master/PandingMaster/PandingMasterDetail/PandingMasterDetail";
import ConfirmMaster from "../pages/Master/ConfirmMaster/ConfirmMaster";
import ConfirmMasterDetail from "../pages/Master/ConfirmMaster/ConfirmMasterDetail/ConfirmMasterDetail";
import CompleteMaster from "../pages/Master/CompleteMaster/CompleteMaster";
import CompleteMasterDetail from "../pages/Master/CompleteMaster/CompleteMasterDetail/CompleteMasterDetail";
import CompleteMasterTable from "../components/Table/Complete/CompleteMasterTable";
import CancelMaster from "../pages/Master/CancelMaster/CancelMaster";
import BecomeAnAgent from "../pages/BecomeAnAgent/BecomeAnAgent";
import AgentDetail from "../pages/BecomeAnAgent/AgentCard/AgentDetail/AgentDetail";
import CancelMasterDetail from "../pages/Master/CancelMaster/CancelMasterDetail/CancelMasterDetail";
import MasterDeposit from "../pages/MasterDeposit/MasterDeposit";
import BalanceSheet from "../pages/BalanceSheet/BalanceSheet";
import ActiveUser from "../pages/Users/ActiveUsers/ActiveUsers";
import AllUser from "../pages/Users/AllUser/AllUser";
import Users from "../pages/Users/Users";
import MProfile from "../Dashboard/MasterDashboard/Page/Profile/MProfile"
import MasterSecurity from "../Dashboard/MasterDashboard/Page/Security/MasterSecurity";
import Profit from "../pages/Profit/Profit"
import SuperMasterHome from "../pages/SuperMasterHome/SuperMasterHome";
import AgentDeposite from "../Dashboard/AgentDashboard/Page/Deposite/AgentDeposite/AgentDeposite";
const SuperMasterRoute = () => {
  return (
    <Routes>
      <Route path="/" exact element={<SuperMasterHome />} />
      <Route path="*" element={<Notfound />} />
      <Route
        exact
        path="/dashboard/super_master/transfer-to"
        element={<TransferTo />}
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
      {/* <Route
      exact
      path="/super_master/deposite/user-deposite"
      element={<ADeposite />}
    /> */}
      {/* <Route
      exact
      path="/super_master/deposite/agent-deposite"
      element={<AgentDeposite />}
    /> */}
      <Route
        exact
        path="/dashboard/super_master/payment_transition"
        element={<ATransitionHistory />}
      />
      <Route
        exact
        path="/dashboard/super_master/unit_transition"
        element={<ATransitionHistory />}
      />
      <Route
        exact
        path="/dashboard/super_master/user-withdraw"
        element={<UserWithDraw />}
      />
      <Route path="/dashboard/account/master" exact element={<Master />} />
      <Route
        path="/dashboard/account/affiliate-agent"
        exact
        element={<AffiliateAgent />}
      />
      <Route
        path="/dashboard/account/affiliate-agent/pending-affiliate-agent"
        element={<PendingAffiliateAgent />}
      />
      <Route
        path="/dashboard/account/affiliate-agent/pending-affiliate-agent/detail/:id"
        element={<PendingAffiliateAgentDetail />}
      />
      {/* Agent */}
      <Route path="/dashboard/account/agent" exact element={<Agent />} />
      <Route
        path="/dashboard/account/agent/pending-agent"
        exact
        element={<PendingAgent />}
      />
      <Route
        path="/dashboard/account/agent/pending-agent/detail/:id"
        exact
        element={<PendingAgentDetail />}
      />
      <Route
        path="/dashboard/account/agent/confirm-agent"
        exact
        element={<ConfirmAgent />}
      />
      <Route
        path="/dashboard/account/agent/confirm-agent/detail/:id"
        exact
        element={<ConfirmAgentDetail />}
      />
      <Route
        path="/dashboard/account/agent/complete-agent"
        exact
        element={<CompleteAgent />}
      />
      <Route
        path="/dashboard/account/agent/complete-agent/detail/:id"
        exact
        element={<CompleteAgentDetail />}
      />
      <Route
        path="/dashboard/account/agent/cancel-agent"
        exact
        element={<CancelAgent />}
      />
      <Route
        path="/dashboard/account/agent/cancel-agent/detail/:id"
        exact
        element={<CancelAgentDetail />}
      />
      {/* CompleteAgent Table */}
      <Route
        path="/dashboard/account/agent/complete-agent/transition-table"
        element={<AgentTransition />}
      />
      {/* Agent */}
      {/* Pending Master */}
      <Route
        path="/dashboard/account/master/panding-master"
        exact
        element={<PandingMaster />}
      />
      <Route
        path="/dashboard/account/master/panding-master/detail/:id"
        exact
        element={<PandingMasterDetail />}
      />
      {/* Confirm Master(sai) */}
      <Route
        path="/dashboard/account/master/confirm-master"
        exact
        element={<ConfirmMaster />}
      />
      <Route
        path="/dashboard/account/master/confirm-master/detail/:id"
        exact
        element={<ConfirmMasterDetail />}
      />
      {/* Confirm Master(sai) */}

      {/* complete Master */}
      <Route
        path="/dashboard/account/master/complete-master"
        exact
        element={<CompleteMaster />}
      />
      <Route
        path="/dashboard/account/master/complete-master/detail/:id"
        exact
        element={<CompleteMasterDetail />}
      />
      <Route
        path="/dashboard/account/master/complete-master/agent-table"
        exact
        element={<CompleteMasterTable />}
      />
      <Route
        path="/dashboard/account/master/complete-master/transition-table"
        exact
        element={<Transition />}
      />

      {/* complete Master */}
      {/* Cancel Master */}
      <Route
        path="/dashboard/account/master/cancel-master"
        exact
        element={<CancelMaster />}
      />
      <Route
        path="/dashboard/become-an-agent"
        exact
        element={<BecomeAnAgent />}
      />
      <Route
        path="/dashboard/become-an-agent/detail/:id"
        exact
        element={<AgentDetail />}
      />
      <Route
        path="/dashboard/account/master/cancel-master/detail/:id"
        exact
        element={<CancelMasterDetail />}
      />
      {/* Cancel Master */}
      <Route
        path="/dashboard/accounting/master-deposit"
        exact
        element={<MasterDeposit />}
      />
      <Route
        path="/dashboard/accounting/balance-sheet"
        exact
        element={<BalanceSheet />}
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
      <Route exact path="/dashboard/super_master/profile" element={<MProfile />} />
      <Route
        exact
        path="/dashboard/super_master/security"
        element={<MasterSecurity />}
      />
      <Route path="/dashboard/super_master/profit" exact element={<Profit type="master" />} />
      <Route path="/dashboard/super_master/withdraw-to-admin" exact element={<AgentDeposite />}/>
    </Routes>
  );
};

export default SuperMasterRoute;
