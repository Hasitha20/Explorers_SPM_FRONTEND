import React from 'react'
import './Sidebar.css'
import {Home} from '@material-ui/icons';
import {CardTravelOutlined} from '@material-ui/icons';
import {ListAltOutlined, PeopleAltOutlined, NoteAddOutlined, DescriptionOutlined} from '@material-ui/icons';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrappper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>
                                Home
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Orders</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <CardTravelOutlined className="sidebarIcon"/>
                                OrdersList
                        </li>
                        <li className="sidebarListItem">
                            <CardTravelOutlined className="sidebarIcon"/>
                                Summary
                        </li>
                        <li className="sidebarListItem">
                            <CardTravelOutlined className="sidebarIcon"/>
                                Payments
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ListAltOutlined className="sidebarIcon"/>
                                Breakfast Menu
                        </li>
                        <li className="sidebarListItem">
                            <ListAltOutlined className="sidebarIcon"/>
                                Lunch Menu
                        </li>
                        <li className="sidebarListItem">
                            <ListAltOutlined className="sidebarIcon"/>
                                Dinner Menu
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Customers</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PeopleAltOutlined className="sidebarIcon"/>
                                Customers List
                        </li>
                        <li className="sidebarListItem">
                            <PeopleAltOutlined className="sidebarIcon"/>
                                Contact Details
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Reports</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <NoteAddOutlined className="sidebarIcon"/>
                                New Report
                        </li>
                        <li className="sidebarListItem">
                            <DescriptionOutlined className="sidebarIcon"/>
                                Saved Reports
                        </li>
                        <li className="sidebarListItem">
                            <DescriptionOutlined className="sidebarIcon"/>
                                Submitted Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
