import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './mainPages/manager/dashboard/DashBoard'
import CreateCategory from './mainPages/manager/category/createCategory/CreateCategory'
//import { GlobalState } from '../Globalstate'
import CategoryList from './mainPages/manager/category/categoryView/CategoryList'
import Login from './login/LoginEmployee'
import AddNewEmployee from './mainPages/manager/employee/addNewEmployee/AddNewEmployee'
import EmployeeList from './mainPages/manager/employee/manageEmployee/EmployeeList'

function Pages(){
    //const state = useContext(GlobalState)
    
    return (
        <Switch>
            <Route path="/category/addNewCategory" exact component={CreateCategory}/>
            <Route path="/dashboard_manager" exact component={DashBoard}/>
            <Route path='/category/category_list' exact component={CategoryList}/>

            <Route path="/employee/add_employee" exact component={AddNewEmployee} />
            <Route path="/employee/manage_emp" exact component={EmployeeList} />

            <Route path="/category/category_detail/:id" exact component={CreateCategory} />

            <Route path='/login_employee' exact component={Login}/>
            
        </Switch>
    )
}
  

export default Pages 