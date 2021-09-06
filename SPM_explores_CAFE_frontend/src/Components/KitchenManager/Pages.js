import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Foods from './Menu/Foods'
 

function Pages(){
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/menu/foods" exact component={Foods}/>
             
        </Switch>
    )
}
  

export default Pages 