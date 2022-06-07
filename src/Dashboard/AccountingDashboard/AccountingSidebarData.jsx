import React from 'react';
import {AiFillHome} from "react-icons/ai"
import {
    RiArrowDownSFill,
    RiArrowUpSFill,
    RiMoneyDollarCircleLine,
    RiAccountPinCircleFill,
} from "react-icons/ri"
import {IoIosArrowForward} from "react-icons/io"
import {FaLayerGroup} from "react-icons/fa"


export const AccountingSidebarData = [
    {
        title: 'Accounting DashBoard',
        path: '/dashbord',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
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
        title: 'Account Title',
        path: '/account-title',
        icon: <RiAccountPinCircleFill />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
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
        title: 'Account Data',
        path: '/account-data',
        icon: <RiMoneyDollarCircleLine />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
     
    },
    {
        title: 'Deposite',
        path: '/accounting/deposit',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill/>,
        iconOpened: <RiArrowUpSFill/>,
      
    },
    {
        title: 'All Bet',
    path: '/all-bet',
    icon: <FaLayerGroup />,
    iconClosed: <RiArrowDownSFill/>,
    iconOpened: <RiArrowUpSFill/>,
    subNav : [
            {
                title: 'All Bet Income',
                path: '/all-bet-income',
            icon: <IoIosArrowForward />,
            },
            {
                title: 'All Bet Outcome',
                path: '/all-bet-outcome',
            icon: <IoIosArrowForward />,
            },
        ]
    }

]