import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import './Header.css'
import {NotificationsNone} from '@material-ui/icons';

function Header() {
    const value = useContext(GlobalState)
    return (
        
        <div className="topbar">
            
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Explorers</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBag">
                            2
                        </span>
                    </div>
                    <img src="https://i.pinimg.com/originals/fe/bc/a1/febca1600e74a56aa1acafd298aea6fc.jpg" alt="" className="topAvatar"/>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Header
