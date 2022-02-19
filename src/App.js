import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import GameSetting from "./pages/GameSetting/GameSetting";
import SoccerSetting from "./pages/SoccerSetting/SoccerSetting";
import FixtureSetting from "./pages/FixtureSetting/FixtureSetting";
import MaungSetting from "./pages/MaungSetting/MaungSetting";
import Football from "./pages/Football/Football";
import Twod from "./pages/2d/Twod";
import Time from "./pages/2d/Time/Time";
import Threed from "./pages/3d/Threed";

import Notfound from "./components/UI/404/404";
function App() {
  return (
    <Router>
      <Sidebar />
      <Container>
        <Routes>
          <Route path="/" exact element={<Overview />} />
          <Route path="/Setting/game-setting" exact element={<GameSetting />} />
          <Route path="/Setting/soccer-setting" exact element={<SoccerSetting />} />
          <Route path="/Setting/soccer-setting/fixture-betting" exact element={<FixtureSetting />} />
          <Route path="/Setting/soccer-setting/maung-setting" exact element={<MaungSetting />} />
          <Route path="/Betting/football" exact element={<Football />} />
          <Route path="/Betting/2d" exact element={<Twod />} />
          <Route path="Betting/2d/time" exact element={<Time/>} />
          <Route path="/Betting/3d" exact element={<Threed />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
