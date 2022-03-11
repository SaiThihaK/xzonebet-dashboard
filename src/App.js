import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import "./App.css";
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
import MDeposite from "./Dashboard/MasterDashboard/Page/Deposite/MDeposite";
import ADeposite from "./Dashboard/AgentDashboard/Page/Deposite/ADeposite";
import MProfile from "./Dashboard/MasterDashboard/Page/Profile/MProfile";
import { type } from "./services/Token";

import EditProfile from "./Dashboard/MasterDashboard/Page/Profile/EditProfile/EditProfile";
import TransferTo from "./Dashboard/MasterDashboard/Page/TransferTo/TransferTo";
import MAgent from "./Dashboard/MasterDashboard/Page/Agent/MAgent";
import TransitionHistory from "./Dashboard/MasterDashboard/Page/TransitionHistory/TransitionHistory";

function App() {
  const DashboardRouting = () => {
    if (type === "admin") {
      return (
        <Routes>
          <Route path="/" exact element={<Overview />} />
          <Route path="/setting/game-setting" exact element={<GameSetting />} />
          <Route
            path="/setting/soccer-setting"
            exact
            element={<SoccerSetting />}
          />
          <Route
            path="/setting/soccer-setting/fixture-betting"
            exact
            element={<FixtureSetting />}
          />
          <Route
            path="/setting/soccer-setting/global-betting"
            exact
            element={<GlobalSetting />}
          />
          <Route
            path="/setting/soccer-setting/global-betting/edit-betting"
            exact
            element={<GlobalSettingEditBetting />}
          />
          <Route
            path="/setting/soccer-setting/global-betting/search-betting"
            exact
            element={<GlobalSettingTable />}
          />
          <Route
            path="/setting/soccer-setting/maung-setting"
            exact
            element={<MaungSetting />}
          />
          <Route path="/betlist/football" exact element={<Football />} />
          <Route path="/betlist/2d" exact element={<Twod />} />
          <Route path="/betlist/2d/time" exact element={<Time />} />
          <Route
            path="/betlist/2d/close-number"
            exact
            element={<TwodCloseNumber />}
          />
          <Route path="/betlist/3d" exact element={<Threed />} />
          <Route path="/betlist/3d/time" exact element={<ThreedTime />} />
          <Route
            path="/betlist/3d/close-number"
            exact
            element={<ThreedCloseNumber />}
          />
          <Route path="/become-an-agent" exact element={<BecomeAnAgent />} />
          <Route
            path="/become-an-agent/detail/:id"
            exact
            element={<AgentDetail />}
          />
          <Route path="/account/super-master" exact element={<SuperMaster />} />
          <Route
            path="account/super-master/detail/:id"
            exact
            element={<SuperMasterDetail />}
          />
          <Route path="/account/master" exact element={<Master />} />
          <Route
            path="/account/affiliate-agent"
            exact
            element={<AffiliateAgent />}
          />
          {/* Agent */}
          <Route path="/account/agent" exact element={<Agent />} />
          <Route
            path="/account/agent/pending-agent"
            exact
            element={<PendingAgent />}
          />
          <Route
            path="/account/agent/pending-agent/detail/:id"
            exact
            element={<PendingAgentDetail />}
          />
          <Route
            path="/account/agent/confirm-agent"
            exact
            element={<ConfirmAgent />}
          />
          <Route
            path="/account/agent/confirm-agent/detail/:id"
            exact
            element={<ConfirmAgentDetail />}
          />
          <Route
            path="/account/agent/complete-agent"
            exact
            element={<CompleteAgent />}
          />
          <Route
            path="/account/agent/complete-agent/detail/:id"
            exact
            element={<CompleteAgentDetail />}
          />
          <Route
            path="/account/agent/cancel-agent"
            exact
            element={<CancelAgent />}
          />
          <Route
            path="/account/agent/cancel-agent/detail/:id"
            exact
            element={<CancelAgentDetail />}
          />
          {/* CompleteAgent Table */}
          <Route
            path="/account/agent/complete-agent/transition-table"
            element={<AgentTransition />}
          />
          {/* Agent */}
          {/* Pending Master */}
          <Route
            path="/account/master/panding-master"
            exact
            element={<PandingMaster />}
          />
          <Route
            path="/account/master/panding-master/detail/:id"
            exact
            element={<PandingMasterDetail />}
          />
          {/* Confirm Master(sai) */}
          <Route
            path="/account/master/confirm-master"
            exact
            element={<ConfirmMaster />}
          />
          <Route
            path="/account/master/confirm-master/detail/:id"
            exact
            element={<ConfirmMasterDetail />}
          />
          {/* Confirm Master(sai) */}

          {/* complete Master */}
          <Route
            path="/account/master/complete-master"
            exact
            element={<CompleteMaster />}
          />
          <Route
            path="/account/master/complete-master/detail/:id"
            exact
            element={<CompleteMasterDetail />}
          />
          <Route
            path="/account/master/complete-master/agent-table"
            exact
            element={<CompleteMasterTable />}
          />
          <Route
            path="/account/master/complete-master/transition-table"
            exact
            element={<Transition />}
          />

          {/* complete Master */}
          {/* Cancel Master */}
          <Route
            path="/account/master/cancel-master"
            exact
            element={<CancelMaster />}
          />
          <Route
            path="/account/master/cancel-master/detail/:id"
            exact
            element={<CancelMasterDetail />}
          />
          {/* Cancel Master */}
          <Route
            path="/accounting/master-deposit"
            exact
            element={<MasterDeposit />}
          />
          <Route path="/account/user" exact element={<Users />} />
          <Route
            path="/account/user/active-user"
            exact
            element={<ActiveUser />}
          />
          <Route path="/account/user/all-user" exact element={<AllUser />} />
          {/* Unit Setting */}
          <Route
            exact
            path="/unit-setting/create-unit"
            element={<CreateUnit />}
          />
          <Route
            exact
            path="/unit-setting/unit-value"
            element={<UnitValue />}
          />
          <Route exact path="/unit-setting/currency" element={<Currency />} />
          {/* Payment Setting */}
          <Route
            exact
            path="/payment-setting/payment-value"
            element={<PaymentType />}
          />
          <Route
            exact
            path="/payment-setting/payment-provider"
            element={<PaymentProvider />}
          />
          <Route
            exact
            path="/payment-setting/payment-provider/create-account"
            element={<CreatePaymentProvider />}
          />
          <Route
            exact
            path="/payment-setting/payment-announcement"
            element={<PaymentAnnouncement />}
          />
          <Route
            exact
            path="/payment-setting/payment-account"
            element={<PaymentAccount />}
          />

          <Route path="*" element={<Notfound />} />
        </Routes>
      );
    }
    //------------------------------------------ Master Dashboard -------------------------------------------------------
    if (type === "master") {
      return (
        <Routes>
          <Route
            exact
            path="/master/bank-setting/payment-account"
            element={<MPaymentAccount />}
          />
          <Route exact path="/master/deposite" element={<MDeposite />} />
          <Route exact path="/master/profile" element={<MProfile />} />
          <Route exact path="master/profile/edit" element={<EditProfile />} />
          <Route exact path="/master/transfer-to" element={<TransferTo />} />
          <Route exact path="/master/agent" element={<MAgent />} />
          <Route
            exact
            path="/master/transition-history"
            element={<TransitionHistory />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      );
    }
    if (type === "agent") {
      return (
        <Routes>
          <Route exact path="/agent/bank-account" element={<ABankAccount />} />
          <Route
            exact
            path="/agent/deposite/user-deposite"
            element={<ADeposite />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      );
    }
  };
  return (
    <Router>
      <Sidebar />
      <Container>{DashboardRouting()}</Container>
    </Router>
  );
}

export default App;
