import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import GameSetting from "./pages/GameSetting/GameSetting";
import SoccerSetting from "./pages/SoccerSetting/SoccerSetting";
import FixtureSetting from "./pages/FixtureSetting/FixtureSetting";
import GlobalSetting from './pages/GlobalSetting/GlobalSetting';
import GlobalSettingTable from './pages/GlobalSetting/GlobalSettingTable/GlobalSettingTable';
import GlobalSettingEditBetting from "./pages/GlobalSetting/GlobalSettingPages/GlobalSettingEditBetting/GlobalSettingEditBetting";
import MaungSetting from "./pages/MaungSetting/MaungSetting";
import Football from "./pages/Football/Football";
import Twod from "./pages/2d/Twod";
import Time from "./pages/2d/Time/Time";
import Threed from "./pages/3d/Threed";
import ThreedTime from "./pages/3d/ThreedTime/ThreedTime";
import TwodCloseNumber from './pages/2d/TwodCloseNumber/TwodCloseNumber';
import ThreedCloseNumber from './pages/3d/ThreedCloseNumber/ThreedCloseNumber';
import BecomeAnAgent from './pages/BecomeAnAgent/BecomeAnAgent';
import AgentDetail from "./pages/BecomeAnAgent/AgentCard/AgentDetail/AgentDetail";
import SuperMaster from "./pages/SuperMaster/SuperMaster";
import SuperMasterDetail from "./pages/SuperMaster/SuperMasterCard/SuperMasterDetail/SuperMasterDetail";
import Master from "./pages/Master/Master";
import PandingMaster from "./pages/Master/PandingMaster/PandingMaster";
import PandingMasterDetail from "./pages/Master/PandingMaster/PandingMasterCard/PandingMasterDetail/PandingMasterDetail";
import MasterDeposit from './pages/MasterDeposit/MasterDeposit';
import Users from './pages/Users/Users';
import ActiveUser from './pages/Users/ActiveUsers/ActiveUsers';
import Notfound from "./components/UI/404/404";

function App() {
  return (
    <Router>
      <Sidebar />
      <Container>
        <Routes>
          <Route path="/" exact element={<Overview />} />
          <Route path="/setting/game-setting" exact element={<GameSetting />} />
          <Route path="/setting/soccer-setting" exact element={<SoccerSetting />} />
          <Route path="/setting/soccer-setting/fixture-betting" exact element={<FixtureSetting />} />
          <Route path="/setting/soccer-setting/global-betting" exact element={<GlobalSetting />} />
          <Route path="/setting/soccer-setting/global-betting/edit-betting" exact element={<GlobalSettingEditBetting />} />
          <Route path="/setting/soccer-setting/global-betting/search-betting" exact element={<GlobalSettingTable />} />
          <Route path="/setting/soccer-setting/maung-setting" exact element={<MaungSetting />} />
          <Route path="/betting/football" exact element={<Football />} />
          <Route path="/betting/2d" exact element={<Twod />} />
          <Route path="/betting/2d/time" exact element={<Time/>} />
          <Route path="/betting/2d/close-number" exact element={<TwodCloseNumber />} />
          <Route path="/betting/3d" exact element={<Threed />} />
          <Route path="/betting/3d/time" exact element={<ThreedTime />} />
          <Route path="/betting/3d/close-number" exact element={<ThreedCloseNumber />} />
          <Route path="/become-an-agent" exact element={<BecomeAnAgent />} />
          <Route path="/become-an-agent/detail/:id" exact element={<AgentDetail />} />
          <Route path="/account/super-master" exact element={<SuperMaster />} />
          <Route path="account/super-master/detail/:id" exact element={<SuperMasterDetail />} />
          <Route path="/account/master" exact element={<Master />} />
          <Route path="/account/master/panding-master" exact element={<PandingMaster />} />
          <Route path="/account/master/panding-master/detail/:id" exact element={<PandingMasterDetail />} />
          <Route path="/accounting/master-deposit" exact element={<MasterDeposit />} />
          <Route path="/account/user" exact element={<Users />} />
          <Route path="/account/user/active-user" exact element={<ActiveUser />} />
          
          
          <Route/>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
