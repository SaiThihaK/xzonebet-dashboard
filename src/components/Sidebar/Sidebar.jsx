import React, { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {Button, Card} from "@mui/material"
// import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import logo from "./images/xlogo.png";
import classes from "./Sidebar.module.css";
import { IconContext } from "react-icons/lib";
import { AgentSidebarData } from "../../Dashboard/AgentDashboard/AgentSideBarData";
import { MasterSidebarData } from "../../Dashboard/MasterDashboard/MasterSideBarData";
import { PostMethod,getMethod } from "../../services/api-services";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from "axios"
import { SuperMasterSidebarData } from "../../Dashboard/SuperMaster/SuperMasterSideBarData";
import { AffiliateAgentSidebarData } from "../../Dashboard/AffiliateAgentDashboard/AffiliateAgentSidebarData";
import { useDispatch, useSelector } from "react-redux";
import {selectedRender} from "../../features/render"
import { HrSidebarData } from "../../Dashboard/HrDashboard/HrSidebarData";
import { AccountingSidebarData } from "../../Dashboard/AccountingDashboard/AccountingSidebarData";
import CustomGetFunction from "../../services/CustomGetFunction";


function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 1);
}
export const logoutHandler = async() => {
  try{
    const response = await axios.request(PostMethod(`api/logout`))
    if(response.data.status === "success"){
      localStorage.removeItem('status');
      localStorage.removeItem('jToken');
      localStorage.removeItem('lToken');
      localStorage.removeItem('type');
      window.location.assign("/");
      refreshPage();
      return;
    }
  }catch(error){
      if (error.response.status === 401 || error.response.data.message === "Unauthenticated."){
        localStorage.removeItem('status');
        localStorage.removeItem('jToken');
        localStorage.removeItem('lToken');
        localStorage.removeItem('type');
        window.location.assign("/");
        refreshPage();
        return;
      }
  }
};
const dashboard = localStorage.getItem('type');
const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [unitMenu,setUnitMenu] = useState(false);
  const unitOpen = Boolean(unitMenu)
  const dispatch = useDispatch();
  const render = useSelector(selectedRender);

  

  const unitMenuOpen = (event)=>{
    setUnitMenu(!unitMenu)
  }

  const unitMenuClose = ()=>{
    setUnitMenu(null);
  }
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const DifDashboard = ()=>{
  if(dashboard==="admin"){
    return SidebarData.map((item, index) => (
      <Submenu item={item} key={index} />)
     );
  }
  if(dashboard==="super_master"){
    return SuperMasterSidebarData.map((item,index)=>(
      <Submenu item={item} key={index} />
    ))
  }
  if(dashboard==="master"){
    return MasterSidebarData.map((item,index)=>(
      <Submenu item={item} key={index} />
    ));
  }
  if(dashboard==="agent"){
    return AgentSidebarData.map((item,index)=>(
      <Submenu item={item} key={index} />
    ))
  }
  if(dashboard==="affiliate-agent"){
    return AffiliateAgentSidebarData.map((item,index)=>(
      <Submenu item={item} key={index} />
    ))
  }
  if(dashboard ==="HR"){
    return HrSidebarData.map((item,index)=>
      (<Submenu item={item} key={index} />)
    )
  }
  if(dashboard ==="Accounting"){
    return AccountingSidebarData.map((item,index)=>
    (<Submenu item={item} key={index} />)
    )

  }
  
  }

  const {data} = CustomGetFunction("api/get-login-user",[render]);
  
  return (
    <IconContext.Provider value={{ color: "#FFF" }}>
      <div className={classes.container}>
        <ul className={classes["header-noti-icons"]}>
        {/*----------------------- Unit-------------------- */}
        <li className={classes["unit"]}>
     
      <div className={classes["main-unit"]}>
      <p>Main Unit-{data?.wallet?.main_unit}</p>
      </div>
         
      <Card className={classes["unit_container"]}>
        <p><span>Promotion Unit</span>-{data?.wallet?.promotion_unit}</p>
        <p>
          <span> Main Unit</span>
         -{data?.wallet?.main_unit}</p>
        <p>
        <span>Diamond Unit</span>  
        -{data?.wallet?.diamond_unit}</p>
      </Card>
          </li>
          <li>
            <button className={classes['header-icon']}>
              <AiIcons.AiOutlineBell color="#9b9b9b" size="23px" />
              <span>10</span>
            </button>
          </li>
          <li>
            <button className={classes['header-icon']}>
              <BiIcons.BiEnvelope color="#9b9b9b" size="23px" />
              <span>10</span>
            </button>
          </li>
          <li>
            <Tooltip title="Profile">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              {/* <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem> */}
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
      <div
        className={classes.sidebarNav}
        // style={{ left: sidebar ? "0" : "-100%" }}
      >
        <div className={classes["sidebar-header"]}>
          <img src={logo} className={classes.logo} alt="" />
          {/* y<h1 style={{ color: "#FFF" }}>Logo</h1> */}
        </div>
        <div className={classes.sidebarWrap}>
        {
          localStorage.getItem("type") !== "admin" && 
       
       
        <div className={classes.menuItem}>
          <div>
            <span className={classes.sidebarLabel}>ID-{data?.id}</span>
          </div>
          </div>
}
{
          localStorage.getItem("type") !== "admin" && 
       

          <div className={classes.menuItem}>
          <div>
            <span className={classes.sidebarLabel}>Name-{data?.agent?.name}</span>
          </div>
          </div>
}
{
          localStorage.getItem("type") !== "admin" && 
       
          <div className={classes.menuItem}>
          <div>
            <span className={classes.sidebarLabel}>Main Unit-{data?.wallet?.main_unit}</span>
          </div>
          </div>
}
        {/* {SidebarData.map((item, index) => (
           <Submenu item={item} key={index} />)
          )} */}
        
  
          {DifDashboard()}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Sidebar;
