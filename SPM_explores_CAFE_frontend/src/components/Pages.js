import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CreateCategory from './mainPages/manager/category/createCategory/CreateCategory'
import Login from './login/LoginEmployee'
import EmployeeList from './mainPages/manager/employee/manageEmployee/EmployeeList'
import MessageList from './mainPages/manager/messages/MessageList'
//import Dashboard_manager from '../components/mainPages/manager/dashboard/DashBoard'
import Dashboard_manager from '../Components/mainPages/manager/dashboard/DashBoard'
//import AddNewEmployee_manager from '../components/mainPages/manager/employee/addNewEmployee/AddNewEmployee'
import AddNewEmployee_manager from '../Components/mainPages/manager/employee/addNewEmployee/AddNewEmployee'
import CategoryList from '../Components/mainPages/manager/category/categoryView/CategoryList'
import ReplyMessage from './mainPages/manager/messages/reply/ReplyMessage'
import CustomerManagement from './mainPages/manager/customers/CustomerManagement'
import ChangeEmpDetails from './mainPages/manager/employee/manageEmployee/changeEmpDetails/ChangeEmpDetails'

function Pages(){
    //const state = useContext(GlobalState)
     
    return (
        <Switch>
            <Route path="/category/addNewCategory" exact component={CreateCategory}/>
            <Route path="/category/category_detail/:id" exact component={CreateCategory} />
            <Route path="/category/category_list" exact component={CategoryList} />
            {/* <Route path='/category/category_list' exact component={CategoryList}/>*/}

            <Route path="/messages_maanger" exact component={MessageList} />
            <Route path="/message_detail/:id" component={ReplyMessage} />

            <Route path="/dashboard_manager" exact component={Dashboard_manager} />

            {/*<Route path="/employee/add_employee" exact component={AddNewEmployee} />*/}
            <Route path="/add_employee_manager" exact component={AddNewEmployee_manager} />
            <Route path="/employee/manage_emp" exact component={EmployeeList} />
            {/*<Route path="/message_detail/:id" component={ReplyMessage} />*/}

            <Route path="/customerManagement" exact component={CustomerManagement} />

            <Route path='/login_employee' exact component={Login}/>
            
        </Switch>
    )
}
  

export default Pages 