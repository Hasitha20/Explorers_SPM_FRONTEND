import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './dashboard/DashboardKM'
import Foods from './Menu/Foods'
import DetailFood from './Details/DetailFood'
import DetailCategoryKM from './Details/DetailCategoryKM'
import AddFoods from './Menu/AddFoods'
import AddMessageKM from './Meesages/AddMessageKM'
// import MessagesKM from '../KitchenManager/MessagesKM'
import KMListC from '../KitchenManager/category/view/KMListC'



 

function Pages(){
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/menu/foods" exact component={Foods}/>

            <Route path="/detail/:id" exact component={DetailFood}/>
            <Route path="/detailc/:id" exact component={DetailCategoryKM}/>
            
            <Route path="/menu/addnewfood" exact component={AddFoods}/>
            <Route path="add/messages" exact component={AddMessageKM}/>


            <Route path="/edit/:id" exact component={AddFoods}/>
            {/* <Route path="/messages" exact component={MessagesKM}/> */}
            <Route path="/kmcategory" exact component={KMListC}/>
             
             
        </Switch>
    )
}
  

export default Pages 