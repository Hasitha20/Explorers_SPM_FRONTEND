import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './mainPages/manager/dashboard/DashBoard'
 
// import CreateCategory from './mainPages/manager/category/CreateCategory'
import Menu from './mainPages/user/menu/Menu'
import LoginU from './mainPages/user/auth/LoginU'
import RegisterU from './mainPages/user/auth/RegisterU'
import Cart from './mainPages/user/cart/Cart'
import DetailProduct from './mainPages/user/detailProduct/DetailProduct'
import UserMgt from './mainPages/user/userMgt/UserMgt'
import ViewHome from './mainPages/user/home/ViewHome'

 
// import CreateCategory from './mainPages/manager/category/createCategory/CreateCategory'
//import { GlobalState } from '../Globalstate'
import CategoryList from './mainPages/manager/category/categoryView/CategoryList'
// import Login from './login/LoginEmployee'
import AddNewEmployee from './mainPages/manager/employee/addNewEmployee/AddNewEmployee'
import EmployeeList from './mainPages/manager/employee/manageEmployee/EmployeeList'
// import {GlobalState} from '../Globalstate'
import Staff from './mainPages/user/staff/Staff'
 
function Pages(){
    // const state = useContext(GlobalState)
    // const [isLogged] = state.userAPI.isLogged
    
    return (
        <Switch>
            {/* <Route path="/category/addNewCategory" exact component={CreateCategory}/> */}
            <Route path="/dashboard_manager" exact component={DashBoard}/>
 

            <Route path="/menu" exact component={Menu}/>
            <Route path="/detail/:id" exact component={DetailProduct}/>
            <Route path="/login" exact component={LoginU}/>
            <Route path="/register" exact component={RegisterU}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/display" exact component={UserMgt} />
            <Route path="/staff" exact component={Staff} />
            <Route path="/viewHome" exact component={ViewHome} />
 
            <Route path='/category/category_list' exact component={CategoryList}/>

            <Route path="/employee/add_employee" exact component={AddNewEmployee} />
            <Route path="/employee/manage_emp" exact component={EmployeeList} />

            {/* <Route path="/category/category_detail/:id" exact component={CreateCategory} /> */}

            {/* <Route path='/login_employee' exact component={Login}/> */}
 
            
        </Switch>
    )
}
  

export default Pages 