import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const AffiliateAgentSidebarData  = [
    {
        title: 'Affiliate DashBoard',
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
        path: '/affiliate-agent/profile',
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
        path: '/affiliate-agent/profit',
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
        path: '/affiliate-agent/transition-history',
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
        title: 'Withdraw',
        path: '/agent/user-withdraw',
        icon: <RiIcons.RiCoinsLine/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
    {
        title: "Affiliate User",
        path: "/affiliate-agent/affiliate-user",
        icon: <FaIcons.FaUserFriends/>
    },
    {
        title: "Deposite",
        path: "/agent/deposite",
        icon: <FaIcons.FaMoneyCheckAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'User Deposite',
                path: '/agent/deposite/user-deposite',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title:"Agent Deposite",
                path:'/agent/deposite/agent-deposite',
                icon: <IoIcons.IoIosArrowForward />,              
            }
        ]
    },
    {
        title: "Betting",
        path: "/affiliate-agent/betting",
        icon: <FaIcons.FaUserFriends/>
    },
]