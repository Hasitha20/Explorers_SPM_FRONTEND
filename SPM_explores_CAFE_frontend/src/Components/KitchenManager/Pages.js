import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Foods from './Menu/Foods'
import DetailFood from './Details/DetailFood'
import AddFoods from './Menu/AddFoods'
 

function Pages(){
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/menu/foods" exact component={Foods}/>
            <Route path="/detail/:id" exact component={DetailFood}/>
            <Route path="/menu/addnewfood" exact component={AddFoods}/>
            <Route path="/edit/:id" exact component={AddFoods}/>
             
        </Switch>
    )
}
  

export default Pages 