import Sidebar, { logoutHandler } from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import GameSetting from "./pages/GameSetting/GameSetting";
import SoccerSetting from "./pages/SoccerSetting/SoccerSetting";
import FixtureSetting from "./pages/FixtureSetting/FixtureSetting";
import GlobalSetting from "./pages/GlobalSetting/GlobalSetting";
import GlobalSettingTable from "./pages/GlobalSetting/GlobalSettingTable/GlobalSettingTable";
import GlobalSettingEditBetting from "./pages/GlobalSetting/GlobalSettingPages/GlobalSettingEditBetting/GlobalSettingEditBetting";
import MaungSetting from "./pages/MaungSetting/MaungSetting";
import Football from "./pages/Football/Football";
import Twod from "./pages/2d/Twod";
import Time from "./pages/2d/Time/Time";
import Threed from "./pages/3d/Threed";
import ThreedTime from "./pages/3d/ThreedTime/ThreedTime";
import TwodCloseNumber from "./pages/2d/TwodCloseNumber/TwodCloseNumber";
import ThreedCloseNumber from "./pages/3d/ThreedCloseNumber/ThreedCloseNumber";
import BecomeAnAgent from "./pages/BecomeAnAgent/BecomeAnAgent";
import AgentDetail from "./pages/BecomeAnAgent/AgentCard/AgentDetail/AgentDetail";
import SuperMaster from "./pages/SuperMaster/SuperMaster";
import SuperMasterDetail from "./pages/SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDetail";
import Master from "./pages/Master/Master";
import PandingMaster from "./pages/Master/PandingMaster/PandingMaster";
import MasterDeposit from "./pages/MasterDeposit/MasterDeposit";
import Users from "./pages/Users/Users";
import ActiveUser from "./pages/Users/ActiveUsers/ActiveUsers";
import Notfound from "./components/UI/404/404";
import AffiliateAgent from "./pages/Affiliate Agent/AffiliateAgent";
import Agent from "./pages/Agent/Agent";
import ConfirmMaster from "./pages/Master/ConfirmMaster/ConfirmMaster";

import CancelMaster from "./pages/Master/CancelMaster/CancelMaster";

import CompleteMaster from "./pages/Master/CompleteMaster/CompleteMaster";
import Transition from "./components/Table/Complete/Transition/Transiton";
import PandingMasterDetail from "./pages/Master/PandingMaster/PandingMasterDetail/PandingMasterDetail";
import ConfirmMasterDetail from "./pages/Master/ConfirmMaster/ConfirmMasterDetail/ConfirmMasterDetail";
import CompleteMasterDetail from "./pages/Master/CompleteMaster/CompleteMasterDetail/CompleteMasterDetail";
import CancelMasterDetail from "./pages/Master/CancelMaster/CancelMasterDetail/CancelMasterDetail";
import PendingAgent from "./pages/Agent/PendingAgent/PendingAgent";
import PendingAgentDetail from "./pages/Agent/PendingAgent/PendingAgentDetail/PendingAgentDetail";
import ConfirmAgent from "./pages/Agent/ConfirmAgent/ConfirmAgent";
import ConfirmAgentDetail from "./pages/Agent/ConfirmAgent/ConfirmAgentDetail.jsx/ConfirmAgentDetail";
import CompleteMasterTable from "./components/Table/Complete/CompleteMasterTable";
import CompleteAgent from "./pages/Agent/CompleteAgent/CompleteAgent";
import CompleteAgentDetail from "./pages/Agent/CompleteAgent/CompleteAgentDetail/CompleteAgentDetail";
import CancelAgent from "./pages/Agent/CancelAgent/CancelAgent";
import CancelAgentDetail from "./pages/Agent/CancelAgent/CancelAgentDetail/CanceclAgentDetail";
import AgentTransition from "./components/Table/AgentTransiton/AgentTransition";
import CreateUnit from "./pages/UnitSetting/CreateUnit/CreateUnit";
import UnitValue from "./pages/UnitSetting/UnitValue/UnitValue";
import PaymentType from "./pages/PaymentSetting/PaymentType/PaymentType";
import PaymentProvider from "./pages/PaymentSetting/PaymentProvider/PaymentProvider";
import PaymentAnnouncement from "./pages/PaymentSetting/PaymentAnnoucement/PaymentAnnouncement";
import PaymentAccount from "./pages/PaymentSetting/PaymentAccount/PaymentAccount";
import CreatePaymentProvider from "./pages/PaymentSetting/PaymentProvider/CreatePaymentProvider/CreatePaymentProvider";
import Currency from "./pages/UnitSetting/Currency/Currency";
import AllUser from "./pages/Users/AllUser/AllUser";
import MPaymentAccount from "./Dashboard/MasterDashboard/Page/BankSetting/PaymentAccount/MPaymentAccount";
import ABankAccount from "./Dashboard/AgentDashboard/Page/BankAccount/ABankAccount";
import ADeposite from "./Dashboard/AgentDashboard/Page/Deposite/ADeposite";
import MProfile from "./Dashboard/MasterDashboard/Page/Profile/MProfile";
import { type } from "./services/Token";

import EditProfile from "./Dashboard/MasterDashboard/Page/Profile/EditProfile/EditProfile";
import TransferTo from "./Dashboard/MasterDashboard/Page/TransferTo/TransferTo";
import MAgent from "./Dashboard/MasterDashboard/Page/Agent/MAgent";
import TransitionHistory from "./Dashboard/MasterDashboard/Page/TransitionHistory/TransitionHistory";
import ATransitionHistory from "./Dashboard/AgentDashboard/Page/TransitionHistory/ATransitionHistory";
import AffiliateAgentSetting from "./pages/Setting/AffiliateAgentSetting/AffiliateAgentSetting";
import AffiliateAgentPercentage from "./pages/Setting/AffiliateAgentSetting/AffiliateAgentPercentage/AffiliateAgentPercentage";
import AffiliateUserPercentage from "./pages/Setting/AffiliateAgentSetting/AffiliateUserPercentage/AffiliateUserPercentage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard";
import AgentDeposite from "./Dashboard/AgentDashboard/Page/Deposite/AgentDeposite/AgentDeposite";
import FootballSetting from "./pages/FootballSetting/FootballSetting";
import PendingAffiliateAgent from "./pages/Affiliate Agent/PendingAffiliateAgent/PendingAffiiliateAgent";
import PendingAffiliateAgentDetail from "./pages/Affiliate Agent/PendingAffiliateAgent/PendingAffiliateAgentDetail/PendingAffiliateAgentDetail";
import Department from "./pages/AdminTeamAccount/Department/Department";
import CreateDepartment from "./pages/AdminTeamAccount/Department/CreateDepartment/CreateDepartment";
import Position from "./pages/AdminTeamAccount/Position/Position";
import CreatePosition from "./pages/AdminTeamAccount/Position/CreatePosition/CreatePosition";
import EditPaymentAccount from "./pages/PaymentSetting/PaymentAccount/EditPaymentAccount/EditPaymentAccount";
import EditPaymentProvider from "./pages/PaymentSetting/PaymentProvider/EditPaymentProvider/EditPaymentProvider";
import UserWithDraw from "./pages/UserWithDraw/UserWithDraw";
import "./App.css";
import AdminAccount from "./pages/AdminTeamAccount/AdminAccount/AdminAccount";
import HrDepartment from "./pages/HrDepartment/HrDepartment";
import HrPosition from "./pages/HrPosition/HrPosition";
import HrEmployee from "./pages/HrEmployee/HrEmployee";
import DetailFunction from "./pages/DetailFunction/DetailFunction";
import AccountTitle from "./pages/AccountTitle/AccountTitle";
import AccountData from "./pages/AccountData/AccountData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewAgent from "./Dashboard/MasterDashboard/Page/Agent/NewAgent/NewAgent";
import NewAgentDetail from "./Dashboard/MasterDashboard/Page/Agent/NewAgent/NewAgentDetail/NewAgentDetail";
import ConnectWithChat from "./pages/ConnectWithChat/ConnectWithChat";
import BecomeAnEmployee from "./pages/BecomeAnEmployee/BecomeAnEmployee";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";
import Profit from "./pages/Profit/Profit";

import Fixture from "./pages/Fixture/Fixture";
import OpenningBet from "./pages/OpeningBet/OpenningBet";
import BetHistory from "./pages/BetHistory/BetHistory";
import OpenbetResult from "./pages/OpenbetResult/OpenbetResult";
import Allbetincome from "./pages/AllBetIncome/Allbetincome";
import AllBetoutcome from "./pages/AllBetoutcome/AllBetoutcome";
import DepartmentDetail from "./pages/AdminTeamAccount/Department/DepartmentDetail/DepartmentDetail";
import EditDepartment from "./pages/AdminTeamAccount/Department/EditDepartment/EditDepartment";
import EditPosition from "./pages/AdminTeamAccount/Position/EditPosition/EditPosition";
import XzonebetFootball from "./pages/Xzonebetfootball/XzonebetFootball";
import AllSport from "./pages/AllSport/AllSport";
import UserDetail from "./pages/Users/UserDetail/UserDetail";
import UserDetailDesTable from "./pages/Users/UserDetailDesTable/UserDetailDesTable";
import BalanceSheet from "./pages/BalanceSheet/BalanceSheet";
import EmployeeDetail from "./pages/HrEmployee/EmployeeDetail/EmployeeDetail";
function App() {
  const DashboardRouting = () => {
    if (type === "admin") {
      return (
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/dashboard/setting/game-setting" exact element={<GameSetting />} />
          <Route
            path="/dashboard/setting/soccer-setting"
            exact
            element={<SoccerSetting />}
          />
          <Route
            path="/dashboard/setting/soccer-setting/fixture-betting"
            exact
            element={<FixtureSetting />}
          />
          <Route
            path="/dashboard/setting/soccer-setting/global-betting"
            exact
            element={<GlobalSetting />}
          />
          <Route
            path="/dashboard/setting/soccer-setting/global-betting/edit-betting"
            exact
            element={<GlobalSettingEditBetting />}
          />
          <Route
            path="/dashboard/setting/soccer-setting/global-betting/search-betting"
            exact
            element={<GlobalSettingTable />}
          />
          <Route
            path="/dashboard/setting/soccer-setting/maung-setting"
            exact
            element={<MaungSetting />}
          />
          <Route
            path="/dashboard/setting/affiliate-agent-setting"
            exact
            element={<AffiliateAgentSetting />}
          />
          <Route
            path="/dashboard/setting/affiliate-agent-setting/affiliate-agent-percentage"
            element={<AffiliateAgentPercentage />}
          />
          <Route
            path="/dashboard/setting/affiliate-agent-setting/affiliate-user-percentage"
            element={<AffiliateUserPercentage />}
          />
          <Route path="/dashboard/betlist/football" exact element={<Football />} />
          <Route path="/dashboard/betlist/2d" exact element={<Twod />} />
          <Route path="/dashboard/betlist/2d/time" exact element={<Time />} />
          <Route
            path="/dashboard/betlist/2d/close-number"
            exact
            element={<TwodCloseNumber />}
          />
          <Route path="/dashboard/betlist/3d" exact element={<Threed />} />
          <Route path="/dashboard/betlist/3d/time" exact element={<ThreedTime />} />
          <Route
            path="/dashboard/betlist/3d/close-number"
            exact
            element={<ThreedCloseNumber />}
          />
          <Route path="/dashboard/become-an-agent" exact element={<BecomeAnAgent />} />
          <Route
            path="/dashboard/become-an-agent/detail/:id"
            exact
            element={<AgentDetail />}
          />
          <Route path="/dashboard/account/super-master" exact element={<SuperMaster />} />
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
          <Route path="/dashboard/accounting/deposit" exact element={<MasterDeposit />} />
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
          <Route path="/dashboard/account/user/all-user" exact element={<AllUser />} />
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
          <Route exact path="/dashboard/unit-setting/currency" element={<Currency />} />
          <Route
            exact
            path="/dashboard/unit-setting/unit-history"
            element={<TransitionHistory />}
          />
          {/* Payment Setting */}
          <Route
            exact
            path="/dashboard/payment-setting/payment-value"
            element={<PaymentType />}
          />
          <Route
            exact
            path="/dashboard/payment-setting/payment-provider"
            element={<PaymentProvider />}
          />
          <Route
            exact
            path="/dashboard/payment-setting/payment-provider/create"
            element={<CreatePaymentProvider />}
          />
          <Route
            exact
            path="/dashboard/payment-setting/payment-provider/edit/:id"
            element={<EditPaymentProvider />}
          />
          <Route
            exact
            path="/dashboard/payment-setting/payment-announcement"
            element={<PaymentAnnouncement />}
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
            path="/dashboard/game-setting/football-setting"
            element={<FootballSetting />}
          />

          {/*------------------------------ Admin Team Account------------------------------------------------ */}
          <Route
            exact
            path="/dashboard/admin-team-account/department"
            element={<Department />}
          />
          <Route
            exact
            path="/dashboard/admin-team-account/department/create-department"
            element={<CreateDepartment />}
          />
          <Route
            exact
            path="/dashboard/admin-team-account/department/department-detail/:id"
            element={<DepartmentDetail />}
          />
          <Route
            exact
            path="/dashboard/admin-team-account/department/edit-department/:id"
            element={<EditDepartment />}
          />
          <Route
            exact
            path="/dashboard/admin-team-account/position"
            element={<Position />}
          />
          <Route
            exact
            path="/dashboard/admin-team-account/position/create-position"
            element={<CreatePosition />}
          />
          <Route
            exact
            path="/dashboard/admin-team-account/position/edit-position/:id"
            element={<EditPosition />}
          />
          <Route
            exact
            path="/dashboard/admin-team-account/admin-account"
            element={<AdminAccount />}
          />
          <Route
            exact
            path="/dashboard/transition-history"
            element={<TransitionHistory />}
          />
          {/* Deposite */}
          <Route exact path="/dashboard/deposite" element={<ADeposite />} />
          {/* -------------------------HR------------------------*/}
          <Route path="*" element={<Notfound />} />
          <Route path="/" exact element={<Overview />} />
          <Route exact path="/dashboard/department" element={<HrDepartment />} />
          <Route exact path="/dashboard/position" element={<HrPosition />} />
          <Route exact path="/dashboard/employee" element={<HrEmployee />} />
          <Route path="/dashboard/odoo-function-detail" element={<DetailFunction />} />
          {/* ======================================All Sports===================================================== */}
          <Route path="/dashboard/all-sports" exact element={<AllSport />} />
          {/* ---------------Xzonebet Football------------------ */}

          <Route
            exact
            path="dashboard/xzonebet-football"
            element={<XzonebetFootball />}
          />
          <Route
            exact
            path="/dashboard/xzonebet-football/fixture"
            element={<Fixture />}
          />
          <Route
            exact
            path="/dashboard/xzonebet-football/opening-bet"
            element={<OpenningBet />}
          />
          <Route
            exact
            path="/dashboard/xzonebet-football/fixture-bet-history"
            element={<BetHistory />}
          />
          <Route
            exact
            path="/dashboard/xzonebet-football/opening-bet-result"
            element={<OpenbetResult />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      );
    }
    //------------------------------------------ Master Dashboard -------------------------------------------------------
    if (type === "master") {
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
          <Route exact path="/dashboard/master/profile/edit" element={<EditProfile />} />
          <Route exact path="/dashboard/master/transfer-to" element={<TransferTo />} />
          <Route exact path="/dashboard/master/agent" element={<MAgent />} />
          <Route exact path="/dashboard/master/agent/new-agent" element={<NewAgent />} />
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
          <Route
            exact
            path="/dashboard/new-agent/detail/:id"
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
          <Route path="/dashboard/connect-with-chat" element={<ConnectWithChat />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      );
    }
    if (type === "agent") {
      return (
        <Routes>
          <Route path="/" exact element={<Overview />} />
          <Route exact path="/dashboard/agent/bank-account" element={<ABankAccount />} />
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
          <Route exact path="/dashboard/agent/transfer-to" element={<TransferTo />} />
          <Route
            exact
            path="/dashboard/agent/transition-history"
            element={<ATransitionHistory />}
          />
          <Route exact path="/dashboard/agent/user-withdraw" element={<UserWithDraw />} />

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
          <Route path="/dashboard/account/user/all-user" exact element={<AllUser />} />
          <Route
            path="/dashboard/account/user/user-detail/:id"
            exact
            element={<UserDetail />}
          />
          <Route path="/dashboard/profit" exact element={<Profit />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      );
    }
    if (type === "super_master") {
      return (
        <Routes>
          <Route path="/" exact element={<Overview />} />
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
            path="/dashboard/super_master/transition-history"
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
          <Route path="/dashboard/become-an-agent" exact element={<BecomeAnAgent />} />
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
          <Route path="/dashboard/account/user/all-user" exact element={<AllUser />} />
        </Routes>
      );
    }
    if (type === "affiliate-agent") {
      return (
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route
            exact
            path="/dashboard/affiliate-agent/transition-history"
            element={<TransitionHistory />}
          />
          <Route exact path="/dashboard/agent/user-withdraw" element={<UserWithDraw />} />
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
    }
    if (type === "hr") {
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
          <Route path="/dashboard/odoo-function-detail" element={<DetailFunction />} />
          <Route
            path="become-an-employee"
            exact
            element={<BecomeAnEmployee />}
          />
          <Route path="/dashboard/employee-form" exact element={<EmployeeForm />} />
        </Routes>
      );
    }
    if (type === "Accounting") {
      return (
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" exact element={<Overview />} />
          <Route path="/dashboard/accounting/deposit" exact element={<MasterDeposit />} />
          <Route path="/dashboard/account-title" exact element={<AccountTitle />} />
          <Route path="/dashboard/account-data" exact element={<AccountData />} />
          <Route path="/dashboard/all-bet-income" exact element={<Allbetincome />} />
          <Route path="/dashboard/all-bet-outcome" exact element={<AllBetoutcome />} />
        </Routes>
      );
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
