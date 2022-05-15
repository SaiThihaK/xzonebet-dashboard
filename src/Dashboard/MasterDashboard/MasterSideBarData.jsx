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

export const MasterSidebarData = [
    {
        title: 'Master DashBoard',
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
        title: 'Agent',
        path: '/dashboard/master/agent',
        icon: <RiAccountPinCircleFill />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Super Master',
        //         path: '/account/super-master',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Master',
        //         path: '/account/master',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Agent',
        //         path: '/account/agent',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: 'User',
        //         path: '/account/user',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Affiliate Agent',
        //         path: '/account/affiliate-agent',
        //         icon: <IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: "Deposite",
        path: "/master/deposite",
        icon: <FaMoneyCheckAlt />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Agent Deposite',
                path: '/dashboard/master/deposite/user-deposite',
                icon: <IoIosArrowForward />,
            },
            {
                title:"Deposite to Admin",
                path:'/dashboard/master/deposite/agent-deposite',
                icon: <IoIosArrowForward />,              
            }
        ]
    },
    {
        title: 'Transition History',
        path: '/dashboard/master/transition-history',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Master Deposit',
        //         path: '/accounting/master-deposit',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Reports',
        //         path: '/accounting/reports',
        //         icon: <IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: 'Transfer To',
        path: '/dashboard/master/transfer-to',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Game Setting',
        //         path: '/setting/game-setting',
        //         icon: <IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Soccer Setting',
        //         path: '/setting/soccer-setting',
        //         icon: <IoIosArrowForward />,
        //     },
        // ]
    },
  
   
    // {
    //     title: 'Payment Setting',
    //     path: '/master/payment-setting',
    //     icon: <AiFillSetting />,
    //     iconClosed: <RiArrowDownSFill/>,
    //     iconOpened: <RiArrowUpSFill/>,
    //     subNav : [
    //         {
    //             title: 'Payment Type',
    //             path: '/master/payment-setting/payment-value',
    //             icon: <IoIosArrowForward />,
    //         },
    //         {
    //             title: 'Payment Provider',
    //             path: '/master/payment-setting/payment-provider',
    //             icon: <IoIosArrowForward />,
    //         },
    //         {
    //             title: 'Payment Account',
    //             path: '/master/payment-setting/payment-account',
    //             icon: <IoIosArrowForward />,
    //         },
           
    //         {
    //             title: 'Payment  Announcement',
    //             path: '/master/payment-setting/payment-announcement',
    //             icon: <IoIosArrowForward />,
    //         },
    //     ]
    // },
  
  
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