import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {
   
    RiAccountPinCircleFill,
    RiMoneyDollarCircleLine
} from "react-icons/ri"
import {FaLayerGroup} from "react-icons/fa"


export const HrSidebarData  = [
    {
        title: 'HR DashBoard',
        path: '/',
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
    }

]