import React from 'react'
import {Link} from 'react-router-dom'

function FoodItem({food}) {

    return (
        <div className="food_card" >
            <img src={food.images.url} alt="" /> 

            <div className="food_box">

                    <h2 name={food.name}>{food.name}</h2>
                    <span1>${food.price}</span1>                   
                    <p>{food.description}</p>
                    <span>Ingredients: {food.ingredients} </span>
                    <p>Category : {food.category} </p>
                    <span>Status : "{food.status}"</span>
                     
            </div>

            <div className="row_btn">

                    <Link id="btn_buy" to={"#"}>View</Link>
                    <Link id="btn_view"  to="#" >Delete</Link> 

            </div>
            
        </div>
    )
}

export default FoodItem
