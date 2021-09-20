import React from 'react'
import './Sidebar.css'
import {Home} from '@material-ui/icons';
import {CardTravelOutlined} from '@material-ui/icons';
import {ListAltOutlined, PeopleAltOutlined, NoteAddOutlined, DescriptionOutlined} from '@material-ui/icons';
import {Link} from 'react-router-dom'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrappper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to ="/cs-dashboard" style={{textDecoration:"none", color:"white"}}>
                            <Home className="sidebarIcon"/>
                                Home
                            </Link>
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
                            <Link to ="/saved-reports" style={{textDecoration:"none", color:"white"}}>
                                <DescriptionOutlined className="sidebarIcon"/>
                                    Saved Reports
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to ="/submitted-reports" style={{textDecoration:"none", color:"white"}}>
                            <DescriptionOutlined className="sidebarIcon"/>
                                Submitted Reports
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
