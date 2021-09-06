import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'

function Home() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isCashier] = state.userAPI.isCashier
    const [menu, setMenu] = useState(false)
    const logoutUser = async() =>{
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }
    const loggedRouter = () =>{
        return(
            <>
                
                <li><Link to="/" onClick={logoutUser} >Logout</Link></li>
            </>
        )
    }
    const styleMenu ={
        left: menu ? 0 : "-100%"
    }
    return (
       
         <header>
         
         <div className="logo">
             <h1>
                 <Link to="/">{isCashier ? 'Admin' : 'DevAT Shop'}</Link>
             </h1>
         </div>
         <ul style={styleMenu}>
             <li><Link to="/">{isCashier ? 'Products' : 'Shop'}</Link></li>
             
             {isCashier && adminRouter()}
             {
                 isLogged ? loggedRouter() : <li><Link to="/login">Login & Register</Link></li>
             }
             
              
          </ul>
         
     </header>
    )
}

export default Home
