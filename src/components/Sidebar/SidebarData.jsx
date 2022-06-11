import React from 'react';
import { AiFillHome } from "react-icons/ai"
import {
    RiArrowDownSFill,
    RiArrowUpSFill,
    RiGroupLine,
    RiAccountPinCircleFill,
} from "react-icons/ri"
import { IoIosArrowForward, IoIosFootball } from "react-icons/io"
import { FaLayerGroup, FaUserFriends } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { MdSportsBasketball } from "react-icons/md"
import {GiTempleGate} from "react-icons/gi"
export const SidebarData = [
    {
        title: 'DashBoard',
        path: '/dashboard',
        icon: <AiFillHome />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: 'Admin Team Account',
        path: '/admin-team-account',
        icon: <RiGroupLine />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Department',
                path: '/dashboard/admin-team-account/department',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Position',
                path: '/dashboard/admin-team-account/position',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Admin Account',
                path: '/dashboard/admin-team-account/admin-account',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Bet List',
        path: '/betlist',
        icon: <IoIosFootball />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Football',
                path: '/dashboard/betlist/football',
                icon: <IoIosArrowForward />,
            },
            {
                title: '2D',
                path: '/dashboard/betlist/2d',
                icon: <IoIosArrowForward />,
            },
            {
                title: '3D',
                path: '/dashboard/betting/3d',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Payment Setting',
        path: '/payment-setting',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Payment Type',
                path: '/dashboard/payment-setting/payment-value',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Payment Provider',
                path: '/dashboard/payment-setting/payment-provider',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Payment Account',
                path: '/dashboard/payment-setting/payment-account',
                icon: <IoIosArrowForward />,
            },

            {
                title: 'Payment  Announcement',
                path: '/dashboard/payment-setting/payment-announcement',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: "Unit Setting",
        path: "unit-setting",
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Create Unit',
                path: '/dashboard/unit-setting/create-unit',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Unit Value',
                path: '/dashboard/unit-setting/unit-value',
                icon: <IoIosArrowForward />,
            },
            //  {
            //      title: 'Currency',
            //      path: '/dashboard/unit-setting/currency',
            //      icon: <IoIosArrowForward />,
            //  },
            {
                title: 'Unit History',
                path: '/dashboard/unit-setting/unit-history',
                icon: <IoIosArrowForward />,
            },

        ]
    },
    {
        title: 'Super Master',
        path: '/dashboard/account/super-master',
        icon: <RiGroupLine />,
    },
    {
        title: "Provider",
        path: "unit-setting",
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'All Provider',
                path: '/dashboard/account/provider',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Cancel Provider',
                path: '/dashboard/account/provider/cancel-provider',
                icon: <IoIosArrowForward />,
            },
            //  {
            //      title: 'Currency',
            //      path: '/dashboard/unit-setting/currency',
            //      icon: <IoIosArrowForward />,
            //  },


        ]
    },
    // {
    //     title: 'Provider',
    //     path: '/dashboard/account/provider',
    //     icon: <RiGroupLine />,
    // },
    {
        title: 'Payment Gateway',
        path: '/dashboard/payment-gateway',
        icon: <GiTempleGate/>,
    },
    {
        title: 'Master',
        path: '/dashboard/account/master',
        icon: <RiGroupLine />,
    },
    {
        title: 'Agent',
        path: '/dashboard/account/agent',
        icon: <RiGroupLine />,
    },
    {
        title: 'Affiliate Agent',
        path: '/dashboard/account/affiliate-agent',
        icon: <RiGroupLine />,
    },
    {
        title: 'User',
        path: '/dashboard/account/user',
        icon: <RiGroupLine />,
    },
    {
        title: "Become A Partner",
        path: "/dashboard/become-an-agent",
        icon: <RiAccountPinCircleFill />
    },

    {
        title: 'Accounting',
        path: '/accounting',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Deposite',
                path: '/dashboard/accounting/deposit',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Account Title',
                path: '/dashboard/account-title',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Account Data',
                path: '/dashboard/account-data',
                icon: <IoIosArrowForward />,
            },
            {
                title: "Balance Sheet",
                path: "/dashboard/accounting/balance-sheet",
                icon: <IoIosArrowForward />,
            }

        ]
    },
    {
        title: "HR",
        path: "/HR",
        icon: <FaUserFriends />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Department',
                path: '/dashboard/department',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Position',
                path: '/dashboard/position',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Employee',
                path: '/dashboard/employee',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Game Setting',
        path: '/game-setting',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Football Setting',
                path: '/dashboard/game-setting/football-setting',
                icon: <IoIosArrowForward />,
            },

        ]
    },

    {
        title: 'All Sports',
        path: '/dashboard/all-sports',
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
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Xzonebet football',
                path: '/dashboard/xzonebet-football',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Live bet',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Live Sports',
                path: '/dashboard/live-sports',
                icon: <IoIosArrowForward />,
            },
        ]
    },

    {
        title: 'Setting',
        path: '/setting',
        icon: <AiFillSetting />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Game Setting',
                path: '/dashboard/setting/game-setting',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Football Setting',
                path: '/dashboard/setting/soccer-setting',
                icon: <IoIosArrowForward />,
            },
            {
                title: 'Affiliate Setting',
                path: '/dashboard/setting/affiliate-agent-setting',
                icon: <IoIosArrowForward />,
            },
        ]
    },
    {
        title: 'Transition History',
        path: '/dashboard/transition-history',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: "Deposite",
        path: "/dashboard/deposite",
        icon: <RiAccountPinCircleFill />
    },

    {
        title: 'Report',
        path: '/report',
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: "Betting Report",
                path: "/dashboard/betting-report",
                icon: <IoIosArrowForward />
            },
            {
                title: "Finance Report",
                path: "/dashboard/finance-report",
                icon: <IoIosArrowForward />
            },
            {
                title: "Account Report",
                path: "/dashboard/betting-report",
                icon: <IoIosArrowForward />
            },
            {
                title: "Log History",
                path: "/dashboard/log-history",
                icon: <IoIosArrowForward />
            },
        ]
    },
    {
        title: 'Partner Site Control',
     
        icon: <FaLayerGroup />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: "Master Term and Conditions",
                path: "/dashboard/master-term-condition",
                icon: <IoIosArrowForward />
            },
            {
                title: "Agent Term and Condition",
                path: "/dashboard/agent-term-condition",
                icon: <IoIosArrowForward />
            },
            {
                title: "Affilicate Agent Term and Condition",
                path: "/dashboard/affiliate-term-condition",
                icon: <IoIosArrowForward />
            },
            {
                title: "Hero Content",
                path: "/dashboard/hero-content",
                icon: <IoIosArrowForward />
            },
            {
                title: "Banner Image",
                path: "/dashboard/banner-image",
                icon: <IoIosArrowForward />
            },

            {
                title: "Benefit",
                path: "/dashboard/benefit",
                icon: <IoIosArrowForward />
            },
            {
                title: "Advertisement Content",
                path: "/dashboard/ads-content",
                icon: <IoIosArrowForward />
            },
            {
                title: "Contact Form",
                path: "/dashboard/contact-form",
                icon: <IoIosArrowForward />
            },
            {
                title: "Question and answer",
                path: "/dashboard/question-answer",
                icon: <IoIosArrowForward />
            },
        ]
    },
        {
            title: 'Promotion',
            path: '/report',
            icon: <FaLayerGroup />,
            iconClosed: <RiArrowDownSFill />,
            iconOpened: <RiArrowUpSFill />,
            subNav: [
                {
                    title: "Daily Cash Back User",
                    path: "/dashboard/daily-cash-back-user",
                    icon: <IoIosArrowForward />
                },
                {
                    title: "Festival Promotion",
                    path: "/dashboard/festival-promotion",
                    icon: <IoIosArrowForward />
                },
                {
                    title: "User level",
                    path: "/dashboard/user-level",
                    icon: <IoIosArrowForward />
                },
                {
                    title: "Deposite Promotion",
                    path: "/dashboard/deposite-promotion",
                    icon: <IoIosArrowForward />
                },
            ]
        },
        {
            title: 'Xzone bet Site Control',
            path: '/dashboard/xzonebet-control',
            icon: <FaLayerGroup />,
            iconClosed: <RiArrowDownSFill />,
            iconOpened: <RiArrowUpSFill />,
            subNav: [
                {
                    title: "Banner Images",
                    path: "/dashboard/xzonebet-control/banner-image",
                    icon: <IoIosArrowForward />
                },
                {
                    title: "Casino Banner",
                    path: "/dashboard/xzonebet-control/casino-banner-image",
                    icon: <IoIosArrowForward />
                },
                {
                    title: "User level",
                    path: "/dashboard/user-level",
                    icon: <IoIosArrowForward />
                },
                {
                    title: "Deposite Promotion",
                    path: "/dashboard/deposite-promotion",
                    icon: <IoIosArrowForward />
                },
            ]
        }
]