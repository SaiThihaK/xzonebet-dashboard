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
       
    },
    {
        title: 'Admin Team Account',
        path: '/admin-team-account',
        icon: <RiIcons.RiGroupLine/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Department',
                path: '/admin-team-account/department',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Position',
                path: '/admin-team-account/position',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Admin Account',
                path: '/admin-team-account/admin-account',
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
                title: 'Super Master',
                path: '/account/super-master',
                icon: <IoIcons.IoIosArrowForward />,
            },
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
        title: 'Accounting',
        path: '/accounting',
        icon: <FaIcons.FaLayerGroup />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Deposite',
                path: '/accounting/deposit',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Account Title',
                path: '/account-title',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Account Data',
                path: '/account-data',
                icon: <IoIcons.IoIosArrowForward />,
            },
           
        ]
    },
    {
        title: "HR",
        path: "/HR",
        icon: <FaIcons.FaUserFriends/>,
        icon: <AiIcons.AiFillSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Department',
                path: '/department',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Position',
                path: '/position',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Employee',
                path: '/employee',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    
    {
        title: 'Payment Setting',
        path: '/payment-setting',
        icon: <AiIcons.AiFillSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Payment Type',
                path: '/payment-setting/payment-value',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Payment Provider',
                path: '/payment-setting/payment-provider',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Payment Account',
                path: '/payment-setting/payment-account',
                icon: <IoIcons.IoIosArrowForward />,
            },
           
            {
                title: 'Payment  Announcement',
                path: '/payment-setting/payment-announcement',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
       title:"Unit Setting",
       path:"unit-setting",
       icon: <AiIcons.AiFillSetting />,
       iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Create Unit',
                path: '/unit-setting/create-unit',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Unit Value',
                path: '/unit-setting/unit-value',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Currency',
                path: '/unit-setting/currency',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Unit History',
                path: '/unit-setting/unit-history',
                icon: <IoIcons.IoIosArrowForward />,
            },
           
        ]
    },
    {
        title: 'Bet List',
        path: '/betlist',
        icon: <IoIcons.IoIosFootball />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Football',
                path: '/betlist/football',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: '2D',
                path: '/betlist/2d',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: '3D',
                path: '/betting/3d',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
        title: "Become A Partner",
        path: "/become-an-agent",
        icon: <RiIcons.RiAccountPinCircleFill/>
    },
    {
        title: 'Game Setting',
        path: '/game-setting',
        icon: <AiIcons.AiFillSetting />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Football Setting',
                path: '/game-setting/football-setting',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
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
                path: '/setting/game-setting',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Football Setting',
                path: '/setting/soccer-setting',
                icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'Affiliate Setting',
                path: '/setting/affiliate-agent-setting',
                icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Transition History',
        path: '/transition-history',
        icon: <FaIcons.FaLayerGroup />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
    },
    {
        title: "Deposite",
        path: "/deposite",
        icon: <RiIcons.RiAccountPinCircleFill/>
    },

    {
        title: 'Report',
        path: '/report',
        icon: <FaIcons.FaLayerGroup />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav :[
            {
                title: "Betting Report",
                path: "/betting-report",
                icon: <RiIcons.RiAccountPinCircleFill/>
            },
            {
                title: "Finance Report",
                path: "/finance-report",
                icon: <RiIcons.RiAccountPinCircleFill/>
            },
            {
                title: "Account Report",
                path: "/betting-report",
                icon: <RiIcons.RiAccountPinCircleFill/>
            },
            {
                title: "Log History",
                path: "/log-history",
                icon: <RiIcons.RiAccountPinCircleFill/>
            },
        ]
    },
    

    
]