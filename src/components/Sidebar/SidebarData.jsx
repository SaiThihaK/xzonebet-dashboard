import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'DashBoard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'User',
                path: '/user',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Revenue',
                path: '/revenue',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Betting',
        path: '/betting',
        icon: <IoIcons.IoIosFootball />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Football',
                path: '/Betting/football',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Account',
        path: '/account',
        icon: <RiIcons.RiAccountPinCircleFill />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'All Master',
                path: '/Betting/all-master',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'All Agent',
                path: '/Betting/all-agent',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'All User',
                path: '/Betting/all-user',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Manage Super Master',
                path: '/Betting/manage-super-master',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Accounting',
        path: '/accounting',
        icon: <FaIcons.FaLayerGroup />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Reports',
                path: '/Accounting/Reports',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
        title: "HR",
        path: "/HR",
        icon: <FaIcons.FaUserFriends/>
    },
    {
        title: 'Setting',
        path: '/setting',
        icon: <AiIcons.AiFillSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Game Setting',
                path: '/Setting/game-setting',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Soccer Setting',
                path: '/Setting/soccer-setting',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
        title: "Become An Agent",
        path: "/become-an-agent",
        icon: <RiIcons.RiAccountPinCircleFill/>
    },
    
]