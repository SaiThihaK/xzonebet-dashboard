import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {
    RiArrowDownSFill,
    RiArrowUpSFill,
    RiGroupLine,
    RiAccountPinCircleFill,
} from "react-icons/ri"
import {IoIosArrowForward,IoIosFootball} from "react-icons/io"
import {FaLayerGroup,FaUserFriends} from "react-icons/fa"
import {AiFillSetting } from "react-icons/ai"
import {MdSportsBasketball} from "react-icons/md"
export const SidebarData = [
    {
        title: 'DashBoard',
        path: '/',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
       
    },
    {
        title: 'Admin Team Account',
        path: '/admin-team-account',
        icon: <RiGroupLine/>,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Department',
                path: '/admin-team-account/department',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Position',
                path: '/admin-team-account/position',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Admin Account',
                path: '/admin-team-account/admin-account',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Bet List',
        path: '/betlist',
        icon: <IoIosFootball />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Football',
                path: '/betlist/football',
                icon: <IoIosArrowForward />,
            },
            {
                title: '2D',
                path: '/betlist/2d',
                icon: <IoIosArrowForward />,
            },
            {
                title: '3D',
                path: '/betting/3d',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Payment Setting',
        path: '/payment-setting',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Payment Type',
                path: '/payment-setting/payment-value',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Payment Provider',
                path: '/payment-setting/payment-provider',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Payment Account',
                path: '/payment-setting/payment-account',
                icon: <IoIosArrowForward />,
            },
           
            {
                title: 'Payment  Announcement',
                path: '/payment-setting/payment-announcement',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title:"Unit Setting",
        path:"unit-setting",
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
         iconOpened: <RiArrowUpSFill/>,
         subNav : [
             {
                 title: 'Create Unit',
                 path: '/unit-setting/create-unit',
                 icon: <IoIosArrowForward />,
             },
             {
                 title: 'Unit Value',
                 path: '/unit-setting/unit-value',
                 icon: <IoIosArrowForward />,
             },
             {
                 title: 'Currency',
                 path: '/unit-setting/currency',
                 icon: <IoIosArrowForward />,
             },
             {
                 title: 'Unit History',
                 path: '/unit-setting/unit-history',
                 icon: <IoIosArrowForward />,
             },
            
         ]
     },
     {
        title: 'Super Master',
        path: '/account/super-master',
        icon: <RiGroupLine />,
    },
    {
        title: 'Master',
        path: '/account/master',
        icon: <RiGroupLine />,
    },
    {
        title: 'Agent',
        path: '/account/agent',
        icon: <RiGroupLine />,
    },
    {
        title: 'Affiliate Agent',
        path: '/account/affiliate-agent',
        icon: <RiGroupLine />,
    },
    {
        title: 'User',
        path: '/account/user',
        icon: <RiGroupLine />,
    },
    {
        title: "Become A Partner",
        path: "/become-an-agent",
        icon: <RiAccountPinCircleFill/>
    },
            
    {
        title: 'Accounting',
        path: '/accounting',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Deposite',
                path: '/accounting/deposit',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Account Title',
                path: '/account-title',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Account Data',
                path: '/account-data',
                icon: <IoIosArrowForward />,
            },
           
        ]
    },
    {
        title: "HR",
        path: "/HR",
        icon: <FaUserFriends/>,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Department',
                path: '/department',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Position',
                path: '/position',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Employee',
                path: '/employee',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Game Setting',
        path: '/game-setting',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Football Setting',
                path: '/game-setting/football-setting',
                icon: <IoIosArrowForward />,
            },
           
        ]
    },
    
    {
        title: 'All Sports',
        path: '/all-sports',
        icon: <MdSportsBasketball />,
        // iconClosed: <RiArrowDownSFill/>,
        // iconOpened: <RiArrowUpSFill/>,
        // subNav : [
        //     {
        //         title: 'Football Setting',
        //         path: '/game-setting/football-setting',
        //         icon: <IoIosArrowForward />,
        //     },
           
        // ]
    },
    {
        title: 'Pre-bet',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Xzonebet football',
                path: '/xzonebet-football',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Live bet',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Live Sports',
                path: '/live-sports',
                icon: <IoIosArrowForward />,
            },
        ]
    },
   
    {
        title: 'Setting',
        path: '/setting',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav : [
            {
                title: 'Game Setting',
                path: '/setting/game-setting',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Football Setting',
                path: '/setting/soccer-setting',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Affiliate Setting',
                path: '/setting/affiliate-agent-setting',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Transition History',
        path: '/transition-history',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
    },
    {
        title: "Deposite",
        path: "/deposite",
        icon: <RiAccountPinCircleFill/>
    },

    {
        title: 'Report',
        path: '/report',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
        subNav :[
            {
                title: "Betting Report",
                path: "/betting-report",
                icon: <RiAccountPinCircleFill/>
            },
            {
                title: "Finance Report",
                path: "/finance-report",
                icon: <RiAccountPinCircleFill/>
            },
            {
                title: "Account Report",
                path: "/betting-report",
                icon: <RiAccountPinCircleFill/>
            },
            {
                title: "Log History",
                path: "/log-history",
                icon: <RiAccountPinCircleFill/>
            },
        ]
    },
    

    
]