import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {
    RiArrowDownSFill,
    RiArrowUpSFill,
    RiCoinsLine,
    RiAccountPinCircleFill,
    RiMoneyDollarCircleLine,
} from "react-icons/ri"
import {IoIosArrowForward} from "react-icons/io"
import {FaLayerGroup,FaUserFriends } from "react-icons/fa"
import {AiFillBank } from "react-icons/ai"


export const SuperMasterSidebarData = [
    {
        title: 'SuperMaster DashBoard',
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
        path: '/super_master/profile',
        icon: <RiAccountPinCircleFill />,
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
        title: 'Profit',
        path: '/super_master/profit',
        icon: <RiMoneyDollarCircleLine />,
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
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Agent',
        //         path: '/account/super_master',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'User',
        //         path: '/account/user',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        //     {
        //         title: 'Affiliate Agent',
        //         path: '/account/affiliate/super_master',
        //         icon: <IoIcons.IoIosArrowForward />,
        //     },
        // ]
    },
    {
        title: 'Transition History',
        path: '/super_master/transition-history',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
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
        title: "Transfer To",
        path: "/super_master/transfer-to",
        icon: <FaUserFriends/>
    },
    {
        title: 'User Withdraw',
        path: '/super_master/user-withdraw',
        icon: <RiCoinsLine/>,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
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
        title: 'Account',
        path: '/account',
        icon: <RiAccountPinCircleFill />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            
            {
                title: 'Master',
                path: '/account/master',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Agent',
                path: '/account/agent',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Affiliate Agent',
                path: '/account/affiliate-agent',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'User',
                path: '/account/user',
                icon: <IoIosArrowForward />,
            },
            
        ]
    },
    {
        title: "Become An Agent",
        path: "/become-an-agent",
        icon: <RiAccountPinCircleFill/>
    },
    // {
    //     title: "Deposite",
    //     path: "/super_master/deposite",
    //     icon: <FaMoneyCheckAlt />,
    //     iconClosed: <RiArrowDownSFill/>,
    //     iconOpened: <RiArrowUpSFill/>,
    //     subNav : [
    //         {
    //             title: 'User Deposite',
    //             path: '/super_master/deposite/user-deposite',
    //             icon: <IoIosArrowForward />,
    //         },
    //         // {
    //         //     title:"Agent Deposite",
    //         //     path:'/super_master/deposite/agent-deposite',
    //         //     icon: <IoIosArrowForward />,              
    //         // }
    //     ]
    // },
    {
        title: "Bank Account",
        path: '/payment-setting/payment-account',
        icon: <AiFillBank/>
    },
    
]