import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {
    RiArrowDownSFill,
    RiArrowUpSFill,

    RiAccountPinCircleFill,
} from "react-icons/ri"
import {IoIosFootball,IoIosArrowForward} from "react-icons/io"
import {FaLayerGroup,FaUserFriends,FaMoneyCheckAlt } from "react-icons/fa"
import {AiFillSetting } from "react-icons/ai"

export const ProviderSidebarData = [
    {
        title: 'Provider DashBoard',
        path: '/',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'User',
        //         path: '/user',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Revenue',
        //         path: '/revenue',
        //         icon: <IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: 'Profile',
        path: '/dashboard/master/profile',
        icon: <IoIosFootball />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Football',
        //         path: '/betting/football',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: '2D',
        //         path: '/betting/2d',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: '3D',
        //         path: '/betting/3d',
        //         icon: <IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: 'Security Imformation',
        path: '/dashboard/master/security-imformation',
        icon: <IoIosFootball />,
    },
   
    {
        title: "User Deposite",
        path: "/dashboard/master/deposite/user-deposite",
        icon: <FaMoneyCheckAlt />,
    },
    {
        title: "User Withdraw",
        path: "/dashboard/master/deposite/user-deposite",
        icon: <FaMoneyCheckAlt />,
    },
    {
        title: "Deposite to Admin",
        path: "/dashboard/master/deposite/agent-deposite",
        icon: <FaMoneyCheckAlt />,
    },
    {
        title: 'Unit History',
        path: '/dashboard/master/transition-history',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
    },
    {
        title: 'Payment History',
        path: '/dashboard/master/transition-history',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
    },

    {
        title: "Payment Account",
        path: '/dashboard/payment-setting/payment-account',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
    },
    // {
    //     title: "Connect with Chat",
    //     path: '/dashboard/connect-with-chat',
    //     icon: <AiFillSetting />,
    // },
    {
        title: "Profit",
        path: "/dashboard/master/profit",
        icon: <FaUserFriends/>
    },
    
]