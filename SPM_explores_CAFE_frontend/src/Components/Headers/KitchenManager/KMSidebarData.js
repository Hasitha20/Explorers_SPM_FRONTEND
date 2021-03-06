import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io' 
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <RiIcons.RiDashboardLine />
    },
    {
        title: 'Menu',
        icon: <BiIcons.BiFoodMenu />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [           
            {
                title: 'Foods',
                path: '/menu/foods',
                icon: <BsIcons.BsPeopleFill />,
            },
            {
                title: 'Add Foods',
                path: '/menu/addnewfood',
                icon: <BsIcons.BsPeopleFill />,
            },
        ]
    },     
    {
        title: 'Ready To Pickup Orders',
        path: '/readytopickuporders',
        icon: <FaIcons.FaClipboardList />
    },
    {
        title: 'Confirmed Orders',
        path: '/confirmedorders',
        icon: <FiIcons.FiCheck />
    },
    {
        title: 'Rejected Orders',
        path: '/rejectedorders',
        icon: <AiIcons.AiOutlineStop />
    },
    {
        title: 'Reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Order Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Foods Reports',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
           
        ]
    },
    {
        title: 'View Todays Menu',
        path: '/viewtodaymenu',
        icon: <BiIcons.BiFoodMenu />
    },
    // {
    //     title: 'Messages',
    //     path: 'add/messages',
    //     icon: <AiIcons.AiOutlineMessage />
    // },
    {
        title: 'Categories',
        path: '/kmcategory',
        icon: <AiIcons.AiOutlineMessage />
    },
]