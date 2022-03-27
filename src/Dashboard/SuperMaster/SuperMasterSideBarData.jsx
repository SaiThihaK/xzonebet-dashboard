import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SuperMasterSidebarData = [
    {
        title: 'SuperMaster DashBoard',
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
        path: '/super_master/profile',
        icon: <RiIcons.RiAccountPinCircleFill />,
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
        title: 'Profit',
        path: '/super_master/profit',
        icon: <RiIcons.RiMoneyDollarCircleLine />,
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
        title: "Transfer To",
        path: "/super_master/transfer-to",
        icon: <FaIcons.FaUserFriends/>
    },
    {
        title: 'User Withdraw',
        path: '/super_master/user-withdraw',
        icon: <RiIcons.RiCoinsLine/>,
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
        title: 'Account',
        path: '/account',
        icon: <RiIcons.RiAccountPinCircleFill />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            
            {
                title: 'Master',
                path: '/account/master',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Agent',
                path: '/account/agent',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Affiliate Agent',
                path: '/account/affiliate-agent',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'User',
                path: '/account/user',
                icon: <IoIcons.IoIosArrowForward />,
            },
            
        ]
    },
    {
        title: "Become An Agent",
        path: "/become-an-agent",
        icon: <RiIcons.RiAccountPinCircleFill/>
    },
    {
        title: "Deposite",
        path: "/super_master/deposite",
        icon: <FaIcons.FaMoneyCheckAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'User Deposite',
                path: '/super_master/deposite/user-deposite',
                icon: <IoIcons.IoIosArrowForward />,
            },
            // {
            //     title:"Agent Deposite",
            //     path:'/super_master/deposite/agent-deposite',
            //     icon: <IoIcons.IoIosArrowForward />,              
            // }
        ]
    },
    {
        title: "Bank Account",
        path: "/super_master/bank-account",
        icon: <AiIcons.AiFillBank/>
    },
    
]