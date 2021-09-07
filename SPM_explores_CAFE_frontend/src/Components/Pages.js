import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import CashierDashboard from './Cashier/Dashboard/CashierDashboard'
import OrderList from './Cashier/Orders/OrderList'
import Reports from './Cashier/Reports/ReportsList/Reports'
import CreateReport from './Cashier/Reports/CreateReport/CreateReport'
import EditReport from './Cashier/Reports/CreateReport/EditReport'
import ViewAllCategorys from './Cashier/Categories/ViewAllCategorys'
import Sub from './Cashier/Reports/ReportsList/Sub'
import ViewReport from './Cashier/Reports/ReportsList/ViewReport'
import Login from './Cashier/auth/Login';
import Register from './Cashier/auth/Register';
import {GlobalState} from '../GlobalState';
import NotFound from './Cashier/Utils/NotFound'
import Home from './Cashier/Dashboard/Home'

function Pages(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isCashier] = state.userAPI.isCashier
    return (
            <Switch>
                <Route path = "/login" exact component ={isLogged? NotFound : Login}/>
                <Route path= "/register" exact component={isLogged? NotFound :Register}/>
                <Route path="/cashier-dashboard" exact component={CashierDashboard}/>
              {/*   <Route path = "/login" exact component ={ Login}/>
                <Route path= "/register" exact component={Register}/>
                <Route path="/cashier-dashboard" exact component={CashierDashboard}/> */}
                <Route path="/" exact component={Home}/>
                <Route path="/orders-list" exact component={OrderList}/>
                 <Route path="/reports" exact component={Reports}/>
                <Route path="/create-report" exact component={CreateReport}/>
                <Route path="/edit-report/:reportid" exact component={ EditReport}/>
                <Route path="/view-report/:reportid" exact component={ViewReport}/>
                <Route path="/submit-reports/" exact component={Sub}/>
                <Route path="/reports" exact component={isCashier? Reports: NotFound}/>
                <Route path="/create-report" exact component={isCashier? CreateReport: NotFound}/>
                <Route path="/edit-report/:reportid" exact component={isCashier? EditReport: NotFound}/>
                <Route path="/view-report/:reportid" exact component={isCashier? ViewReport: NotFound}/>
                <Route path="/submit-reports/" exact component={isCashier? Sub: NotFound}/>
                

                <Route path="/cashierCategory" exact component={ViewAllCategorys} />
            
            </Switch>
       
    )
}
  

export default Pages 