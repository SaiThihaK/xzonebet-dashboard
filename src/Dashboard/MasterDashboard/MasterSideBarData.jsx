import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const MasterSidebarData = [
    {
        title: 'Master DashBoard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'User',
        //         path: '/user',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Revenue',
        //         path: '/revenue',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: 'Profile',
        path: '/master/profile',
        icon: <IoIcons.IoIosFootball />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Football',
        //         path: '/betting/football',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: '2D',
        //         path: '/betting/2d',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: '3D',
        //         path: '/betting/3d',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: 'Security Imformation',
        path: '/master/security-imformation',
        icon: <IoIcons.IoIosFootball />,
    },
    {
        title: 'Agent',
        path: '/master/agent',
        icon: <RiIcons.RiAccountPinCircleFill />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Super Master',
        //         path: '/account/super-master',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Master',
        //         path: '/account/master',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Agent',
        //         path: '/account/agent',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'User',
        //         path: '/account/user',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Affiliate Agent',
        //         path: '/account/affiliate-agent',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: 'Transition History',
        path: '/master/transition-history',
        icon: <FaIcons.FaLayerGroup />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Master Deposit',
        //         path: '/accounting/master-deposit',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Reports',
        //         path: '/accounting/reports',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: "Profit",
        path: "/master/profit",
        icon: <FaIcons.FaUserFriends/>
    },
    // {
    //     title: 'Payment Setting',
    //     path: '/master/payment-setting',
    //     icon: <AiIcons.AiFillSetting />,
    //     iconClosed: <RiIcons.RiArrowDownSFill/>,
    //     iconOpened: <RiIcons.RiArrowUpSFill/>,
    //     subNav : [
    //         {
    //             title: 'Payment Type',
    //             path: '/master/payment-setting/payment-value',
    //             icon: <IoIcons.IoIosArrowForward />,
    //         },
    //         {
    //             title: 'Payment Provider',
    //             path: '/master/payment-setting/payment-provider',
    //             icon: <IoIcons.IoIosArrowForward />,
    //         },
    //         {
    //             title: 'Payment Account',
    //             path: '/master/payment-setting/payment-account',
    //             icon: <IoIcons.IoIosArrowForward />,
    //         },
           
    //         {
    //             title: 'Payment  Announcement',
    //             path: '/master/payment-setting/payment-announcement',
    //             icon: <IoIcons.IoIosArrowForward />,
    //         },
    //     ]
    // },
    {
        title: 'Transfer To',
        path: '/master/transfer-to',
        icon: <AiIcons.AiFillSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Game Setting',
        //         path: '/setting/game-setting',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Soccer Setting',
        //         path: '/setting/soccer-setting',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: "Deposite",
        path: "/master/deposite",
        icon: <FaIcons.FaMoneyCheckAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'User Deposite',
                path: '/master/deposite/user-deposite',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title:"Agent Deposite",
                path:'/master/deposite/agent-deposite',
                icon: <IoIcons.IoIosArrowForward />,              
            }
        ]
    },
    {
        title: "Bank Setting",
        path: '/payment-setting/payment-account',
        icon: <AiIcons.AiFillSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
    {
        title: "Connect with Chat",
        path: '/connect-with-chat',
        icon: <AiIcons.AiFillSetting />,
    },
    
]