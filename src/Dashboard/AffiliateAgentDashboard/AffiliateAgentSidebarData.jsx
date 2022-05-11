import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {
    RiArrowDownSFill,
    RiArrowUpSFill,
    RiCoinsLine,
    RiMoneyDollarCircleLine,
    RiAccountPinCircleFill,
} from "react-icons/ri"
import {IoIosArrowForward} from "react-icons/io"
import {FaLayerGroup,FaUserFriends,FaMoneyCheckAlt} from "react-icons/fa"


export const AffiliateAgentSidebarData  = [
    {
        title: 'Affiliate DashBoard',
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
        path: '/dashboard/affiliate-agent/profile',
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
        path: '/dashboard/affiliate-agent/profit',
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
        //         icon: <IoIosArrowForward />,
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
        path: '/dashboard/affiliate-agent/transition-history',
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
        title: 'Withdraw',
        path: '/dashboard/agent/user-withdraw',
        icon: <RiCoinsLine/>,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
    },
    {
        title: "Affiliate User",
        path: "/dashboard/affiliate-agent/affiliate-user",
        icon: <FaUserFriends/>
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
                path: '/dashboard/agent/deposite/user-deposite',
                icon: <IoIosArrowForward />,
            },
            {
                title:"Agent Deposite",
                path:'/dashboard/agent/deposite/agent-deposite',
                icon: <IoIosArrowForward />,              
            }
        ]
    },
    {
        title: "Betting",
        path: "/dashboard/affiliate-agent/betting",
        icon: <FaUserFriends/>
    },
]