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
        path: '/department',
        icon: <RiAccountPinCircleFill />,
      
    },
    {
        title: 'Position',
        path: '/position',
        icon: <RiMoneyDollarCircleLine />,
        
    },
    {
        title: 'Employee',
        path: '/employee',
        icon: <FaLayerGroup />,
        
    },
    {
        title:"Become an Employee",
        path:"/become-an-employee",
        icon: <FaLayerGroup />,
    },
    {
        title:"Employee Form",
        path:"/employee-form",
        icon: <FaLayerGroup />,
    }

]