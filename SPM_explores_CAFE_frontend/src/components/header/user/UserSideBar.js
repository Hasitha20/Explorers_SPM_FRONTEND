import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {UserSideBarData} from './UserSideBarData'
import UserSubMenu from './UserSubMenu'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    margin-top: 30px;
`;

const NavIconC = styled(Link)`
    margin-left: 82rem;
    font-size: 2rem;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
    margin-top: -80px;
    top: 0;
    
`;


const SideBarNav = styled.nav`
    background: #15171c;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

function SideBar() {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    const state = useContext(GlobalState)
    // const [isLogged, setIsLogged] = state.userAPI.isLogged

    // const logoutUser = async () =>{
    //     await axios.get('/user/logout')
    //     localStorage.clear()
    //     setIsLogged(false)
    // }

    // const loggedRouter = () =>{
    //     return(
    //         <>
    //          <NavIconC to="/home" onClick={logoutUser} style={{color: "white", textDecoration: "none",fontSize: "20px" }}>
    //                 LOGOUT
                    
    //             </NavIconC>
    //         </>
    //     )
    // }

    return (
        <div>
        <Nav>
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
        </Nav>

        <SideBarNav sidebar={sidebar} style={{fontSize: "20px"}}>
            <SidebarWrap>
                <NavIcon to="/home" style={{color: "white", textDecoration: "none" }}>
                    Explores CAFE
                </NavIcon>
                {/* {
                    isLogged ? loggedRouter() :  <NavIconC to="/login" onClick={logoutUser} style={{color: "white", textDecoration: "none",fontSize: "20px" }}>
                    LOGIN
                    
                </NavIconC>
                } */}
                {/* <NavIconC to="/login" style={{color: "white", textDecoration: "none",fontSize: "20px" }}>
                    LOGIN
                    
                </NavIconC> */}
                <div style={{paddingTop: "20px"}}> 
                    {UserSideBarData.map((item, index) => {
                        return <UserSubMenu item={item} key={index} />;
                    })}
                </div>
            </SidebarWrap>
        </SideBarNav>
        </div>
    )
}

export default SideBar
