import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import './Header.css'

import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import {BiDotsVerticalRounded} from "react-icons/bi";
import {FaRegBell} from "react-icons/fa";
import axios from 'axios'
import {Link} from 'react-router-dom'
/* import Loading from '../../Pages/Utils/Loading/Loading'; */

function Header() {
    const state = useContext(GlobalState)
    console.log(state)
    /* const [isLogged] = state.csuserAPI.isLogged; */
    const [isCashier] = state.csuserAPI.isCashier;
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

   const logoutUser = async() =>{
      await axios.get('/csuser/logout')

      localStorage.removeItem('firstLogin')

      window.location.href = "/";
    }

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


   
    return (
        
        <div className="topbar">
            
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Explorers</span>
                </div>
                <div className="topRight">
                       {
                         isCashier ?  <>
                         <div className="topbarIconsContainer">
                              <FaRegBell size={30}/>
                              <span className="topIconBag">
                                  2
                              </span>
                          </div>
                          <img src="https://i.pinimg.com/originals/fe/bc/a1/febca1600e74a56aa1acafd298aea6fc.jpg" alt="" className="topAvatar" />
                          <Button
                                  ref={anchorRef}
                                  aria-controls={open ? 'menu-list-grow' : undefined}
                                  aria-haspopup="true"
                                  onClick={handleToggle}
                                  
                                  >
                                <BiDotsVerticalRounded size={30} />
                          </Button>
                          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                              {({ TransitionProps, placement }) => (
                                  <Grow
                                      {...TransitionProps}
                                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                      >
                                      <Paper>
                                          <ClickAwayListener onClickAway={handleClose}>
                                          <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                                              <MenuItem onClick={handleClose}>My account</MenuItem>
                                              <Link to="/" onClick={logoutUser} ><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
                                          </MenuList>
                                          </ClickAwayListener>
                                      </Paper>
                                  </Grow>
                              )}
                          </Popper>
                        
                         </> : <li><Link to="/cslogin">Login & Register</Link></li>
                       }
                      

                </div>
                
            </div>
        </div>
    )
}

export default Header
