import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {RiGroupLine} from "react-icons/ri"
import {
   
    RiAccountPinCircleFill,
    RiMoneyDollarCircleLine
} from "react-icons/ri"
import {FaLayerGroup} from "react-icons/fa"


export const HrSidebarData  = [
    {
        title: 'HR DashBoard',
        path: '/dashboard',
        icon: <AiFillHome />,
       
    },
    {
        title: 'Department',
        path: '/dashboard/department',
        icon: <RiAccountPinCircleFill />,
      
    },
    {
        title: 'Position',
        path: '/dashboard/position',
        icon: <RiMoneyDollarCircleLine />,
        
    },
    {
        title: 'Employee',
        path: '/dashboard/employee',
        icon: <FaLayerGroup />,
        
    },
    {
        title:"Become an Employee",
        path:"/dashboard/become-an-employee",
        icon: <FaLayerGroup />,
    },
    {
        title:"Employee Form",
        path:"/dashboard/employee-form",
        icon: <FaLayerGroup />,
    },
    {
        title: 'Super Master',
        path: '/dashboard/account/super-master',
        icon: <RiGroupLine />,
    },
    {
        title: 'Master',
        path: '/dashboard/account/master',
        icon: <RiGroupLine />,
    },
    {
        title: 'Agent',
        path: '/dashboard/account/agent',
        icon: <RiGroupLine />,
    },
    {
        title: 'Affiliate Agent',
        path: '/dashboard/account/affiliate-agent',
        icon: <RiGroupLine />,
    },
    {
        title: 'User',
        path: '/dashboard/account/user',
        icon: <RiGroupLine />,
    },
    {
        title: "Become A Partner",
        path: "/dashboard/become-an-agent",
        icon: <RiAccountPinCircleFill/>
    },
           

]