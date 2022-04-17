import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const AccountingSidebarData = [
    {
        title: 'Accounting DashBoard',
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
        title: 'Account Title',
        path: '/account-title',
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
        title: 'Account Data',
        path: '/account-data',
        icon: <RiIcons.RiMoneyDollarCircleLine />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
     
    },
    {
        title: 'Deposite',
        path: '/accounting/deposit',
        icon: <FaIcons.FaLayerGroup />,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
      
    },
    {
        title: 'All Bet',
    path: '/all-bet',
    icon: <FaIcons.FaLayerGroup />,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav : [
            {
                title: 'All Bet Income',
                path: '/all-bet-income',
            icon: <IoIcons.IoIosArrowForward />,
            },
            {
                title: 'All Bet Outcome',
                path: '/all-bet-outcome',
            icon: <IoIcons.IoIosArrowForward />,
            },
        ]
    }

]