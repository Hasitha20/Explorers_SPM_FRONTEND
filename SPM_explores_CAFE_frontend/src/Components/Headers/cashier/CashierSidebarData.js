import React from 'react'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

export const CashierSidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <RiIcons.RiDashboardLine />
    },
    {
        title: 'Category',
        path: '/cashierCategory',
        icon: <IoIcons5.IoFastFood />
    },
    {
        title: 'Orders',
        icon: <BsIcons.BsPeopleFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path:'/orders-list'
    },
    {
        title: 'Customers',
        icon: <BsIcons.BsPeopleCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path:''
    },
    {
        title: 'Menu',
        icon: <IoIcons5.IoFastFood  />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        path:'#'
        
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'New Entry',
                path: '/create-report',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Submitted Reports',
                path: '/submit-reports',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    }
]