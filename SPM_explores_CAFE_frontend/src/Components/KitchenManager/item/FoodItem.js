import React from 'react'
import {Link} from 'react-router-dom'

function FoodItem({food}) {

    return (
        <div className="food_card" >
            <img src={food.images.url} alt="" /> 

            <div className="food_box">

                    <h2 name={food.name}>{food.name}</h2>
                    <span>${food.price}</span>                   
                    <p>{food.description}</p>
                    <span>Ingredients: {food.ingredients} </span>
                    <p>Category : {food.category} </p>
                    <span>Status : "{food.status}"</span>
                     
            </div>

            <div className="row_btn">

                    {/* <Link id="btn_view" to={`detail/${food._id}`}>
                        View
                    </Link> */}
                    <a id="btn_view" href={`/detail/${food._id}`}>View</a>
                    
                    <Link id="btn_delete"  to={`/edit/${food._id}`} >Edit</Link> 

            </div>
            
        </div>
    )
}

export default FoodItem
