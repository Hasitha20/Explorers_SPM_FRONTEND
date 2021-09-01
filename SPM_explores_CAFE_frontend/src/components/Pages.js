import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import DashBoard from './mainPages/manager/dashboard/DashBoard'
import CreateCategory from './mainPages/manager/category/CreateCategory'
import { GlobalState } from '../Globalstate'

function Pages(){
    const state = useContext(GlobalState)
    
    return (
        <Switch>
            <Route path="/category/addNewCategory" exact component={CreateCategory}/>
            <Route path="/dashboard_manager" exact component={DashBoard}/>
            
        </Switch>
    )
}
  

export default Pages 