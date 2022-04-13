import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const HrSidebarData  = [
    {
        title: 'HR DashBoard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
       
    },
    {
        title: 'Department',
        path: '/department',
        icon: <RiIcons.RiAccountPinCircleFill />,
      
    },
    {
        title: 'Position',
        path: '/position',
        icon: <RiIcons.RiMoneyDollarCircleLine />,
        
    },
    {
        title: 'Employee',
        path: '/employee',
        icon: <FaIcons.FaLayerGroup />,
        
    },
    {
        title:"Become an Employee",
        path:"/become-an-employee",
        icon: <FaIcons.FaLayerGroup />,
    },
    {
        title:"Employee Form",
        path:"/employee-form",
        icon: <FaIcons.FaLayerGroup />,
    }

]