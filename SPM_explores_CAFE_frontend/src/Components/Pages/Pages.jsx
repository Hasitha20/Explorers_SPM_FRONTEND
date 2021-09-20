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
import cshome from "../cshome";
import CSCreateReport from "../cashier/Reports/SavedReports/CreateReport/CSCreateReport";
import CSSubmitReportList from "../cashier/Reports/SubmittedReports/CSSubmitReportList";

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.csuserAPI.isLogged
    const [isCashier] = state.csuserAPI.isCashier
    return (
        <div className="pages">
            <Switch>
                
                
                <Route path="/" exact component={cshome}></Route>
                <Route path="/cslogin" exact component={isLogged ? NotFound : CSLogin}></Route>
                <Route path="/csregister" exact component={isLogged ? NotFound : CSRegister}></Route>

                <Route path="/cs-dashboard" exact component={isCashier ? CSHome : NotFound}></Route>
                <Route path="/saved-reports" exact component={isCashier ? CSSavedReportList: NotFound}></Route>
                <Route path="/submitted-reports" exact component={isCashier ? CSSubmitReportList: NotFound}></Route>
                <Route path="/create-report" exact component={isCashier ? CSCreateReport: NotFound}></Route>
                <Route path="/edit-report/:id" exact component={isCashier ? CSCreateReport: NotFound}></Route>

                <Route path="*" exact component={NotFound}></Route>
                
            </Switch>
        </div>
    )
}

export default Pages
