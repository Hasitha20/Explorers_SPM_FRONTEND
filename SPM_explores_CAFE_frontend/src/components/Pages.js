import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './mainPages/manager/dashboard/DashBoard'
import CreateCategory from './mainPages/manager/category/CreateCategory'
import Menu from './mainPages/user/menu/Menu'
import Login from './mainPages/user/auth/Login'
import Register from './mainPages/user/auth/Register'
import Cart from './mainPages/user/cart/Cart'
import DetailProduct from './../components/mainPages/user/detailProduct/DetailProduct'

import { GlobalState } from '../Globalstate'

function Pages(){
    const state = useContext(GlobalState)
    
    return (
        <Switch>
            <Route path="/category/addNewCategory" exact component={CreateCategory}/>
            <Route path="/dashboard_manager" exact component={DashBoard}/>

            <Route path="/menu" exact component={Menu}/>
            <Route path="/detail/:id" exact component={DetailProduct}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/cart" exact component={Cart}/>
            
        </Switch>
    )
}
  

export default Pages 