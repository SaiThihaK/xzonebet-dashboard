import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {
    RiArrowDownSFill,
    RiArrowUpSFill,
    RiMoneyDollarCircleLine,
    RiAccountPinCircleFill,
    RiCoinsLine
} from "react-icons/ri"
import {IoIosArrowForward} from "react-icons/io"
import {FaLayerGroup,FaUserFriends,FaMoneyCheckAlt} from "react-icons/fa"
import {AiFillBank} from "react-icons/ai"

export const AgentSidebarData = [
    {
        title: 'Agent DashBoard',
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
        path: '/agent/profile',
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
        path: '/profit',
        icon: <RiMoneyDollarCircleLine/>,
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
        title: 'User',
        path: '/account/user',
        icon: <RiAccountPinCircleFill />,
    },
    {
        title: 'Transition History',
        path: '/agent/transition-history',
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
        title: "Transfer To",
        path: "/agent/transfer-to",
        icon: <FaUserFriends/>
    },
    {
        title: 'User Withdraw',
        path: '/agent/user-withdraw',
        icon: <RiCoinsLine/>,
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
    {
        title: "Deposite",
        path: "/agent/deposite",
        icon: <FaMoneyCheckAlt />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'User Deposite',
                path: '/agent/deposite/user-deposite',
                icon: <IoIosArrowForward />,
            },
            {
                title:"Agent Deposite",
                path:'/agent/deposite/agent-deposite',
                icon: <IoIosArrowForward />,              
            }
        ]
    },
    {
        title: "Bank Account",
        path: '/payment-setting/payment-account',
        icon: <AiFillBank/>
    },
    
]