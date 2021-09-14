import { GlobalState } from "../../GlobalState";
import {Switch, Route} from 'react-router-dom'
import React, {useContext} from 'react'
import CSHome from "../cashier/Dashboard/CSHome";
import './Pages.css';
import CSLogin from "../cashier/Auth/CSLogin";
import CSRegister from "../cashier/Auth/CSRegister";
import NotFound from "./Utils/NotFound";
import CSSavedReportList from "../cashier/Reports/SavedReports/ReportList/CSSavedReportList";
import CashierDashboard from "../CashierDashboard";
function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.csuserAPI.isLogged
    const [isCashier] = state.csuserAPI.isCashier
    return (
        <div className="pages">
            <Switch>
                
                <Route path="/" exact component={CSLogin}></Route>
                <Route path="/csregister" exact component={isLogged ? NotFound : CSRegister}></Route>

                <Route path="/cs-dashboard" exact component={ isCashier ? CSHome : NotFound}></Route>
                <Route path="/saved-reports" exact component={CSSavedReportList}></Route>

                <Route path="*" exact component={NotFound}></Route>
                
            </Switch>
        </div>
    )
}

export default Pages
