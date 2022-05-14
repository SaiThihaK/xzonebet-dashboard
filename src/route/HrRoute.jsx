import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Notfound from "../components/UI/404/404";
import HrDepartment from "../pages/HrDepartment/HrDepartment";
import HrPosition from "../pages/HrPosition/HrPosition";
import HrEmployee from "../pages/HrEmployee/HrEmployee";
import EmployeeDetail from "../pages/HrEmployee/EmployeeDetail/EmployeeDetail";
import CreateDepartment from "../pages/AdminTeamAccount/Department/CreateDepartment/CreateDepartment";
import CreatePosition from "../pages/AdminTeamAccount/Position/CreatePosition/CreatePosition";
import DetailFunction from "../pages/DetailFunction/DetailFunction";
import BecomeAnEmployee from "../pages/BecomeAnEmployee/BecomeAnEmployee";
import EmployeeForm from "../pages/EmployeeForm/EmployeeForm";
import BecomeAnAgent from "../pages/BecomeAnAgent/BecomeAnAgent";
import AgentDetail from "../pages/BecomeAnAgent/AgentCard/AgentDetail/AgentDetail";
import SuperMaster from "../pages/SuperMaster/SuperMaster";
import SuperMasterDetail from "../pages/SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDetail";
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
import Transition from "../components/Table/Complete/Transition/Transiton";
import CancelMaster from "../pages/Master/CancelMaster/CancelMaster";
import CancelMasterDetail from "../pages/Master/CancelMaster/CancelMasterDetail/CancelMasterDetail";
import MasterDeposit from "../pages/MasterDeposit/MasterDeposit";
import AccountTitle from "../pages/AccountTitle/AccountTitle";
import AccountData from "../pages/AccountData/AccountData";
import BalanceSheet from "../pages/BalanceSheet/BalanceSheet";
import Users from "../pages/Users/Users";
import ActiveUser from "../pages/Users/ActiveUsers/ActiveUsers";
import AllUser from "../pages/Users/AllUser/AllUser";
import UserDetail from "../pages/Users/UserDetail/UserDetail";
import UserDetailDesTable from "../pages/Users/UserDetailDesTable/UserDetailDesTable";
import CreateUnit from "../pages/UnitSetting/CreateUnit/CreateUnit";
import UnitValue from "../pages/UnitSetting/UnitValue/UnitValue";
import Currency from "../pages/UnitSetting/Currency/Currency";
import TransitionHistory from "../Dashboard/MasterDashboard/Page/TransitionHistory/TransitionHistory";


const HrRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<Notfound />} />
      <Route path="/" exact element={<Overview />} />
      <Route exact path="/dashboard/department" element={<HrDepartment />} />
      <Route exact path="/dashboard/position" element={<HrPosition />} />
      <Route exact path="/dashboard/employee" element={<HrEmployee />} />
      <Route
        exacct
        path="/dashboard/employee/employee-detail/:id"
        element={<EmployeeDetail />}
      />
      <Route
        exact
        path="/dashboard/admin-team-account/department/create-department"
        element={<CreateDepartment />}
      />
      <Route
        path="/dashboard/admin-team-account/position/create-position"
        element={<CreatePosition />}
      />
      <Route
        path="/dashboard/odoo-function-detail"
        element={<DetailFunction />}
      />
      <Route
        path="/dashboard/become-an-employee"
        exact
        element={<BecomeAnEmployee />}
      />
      <Route path="/dashboard/employee-form" exact element={<EmployeeForm />} />

      {/* =============================Become an Partner===================== */}
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
        path="/dashboard/account/super-master"
        exact
        element={<SuperMaster />}
      />
      <Route
        path="/dashboard/account/super-master/detail/:id"
        exact
        element={<SuperMasterDetail />}
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
        path="/dashboard/account/master/cancel-master/detail/:id"
        exact
        element={<CancelMasterDetail />}
      />
      {/* Cancel Master */}
      <Route
        path="/dashboard/accounting/deposit"
        exact
        element={<MasterDeposit />}
      />
      <Route path="/dashboard/account-title" exact element={<AccountTitle />} />
      <Route path="/dashboard/account-data" exact element={<AccountData />} />
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
      <Route
        path="/dashboard/account/user/user-detail/:id"
        exact
        element={<UserDetail />}
      />
      <Route
        exact
        path="/dashboard/deposite-withdraw-table"
        element={<UserDetailDesTable />}
      />
      {/* Unit Setting */}
      <Route
        exact
        path="/dashboard/unit-setting/create-unit"
        element={<CreateUnit />}
      />
      <Route
        exact
        path="/dashboard/unit-setting/unit-value"
        element={<UnitValue />}
      />
      <Route
        exact
        path="/dashboard/unit-setting/currency"
        element={<Currency />}
      />
      <Route
        exact
        path="/dashboard/unit-setting/unit-history"
        element={<TransitionHistory />}
      />
    </Routes>
  );
};

export default HrRoute;
