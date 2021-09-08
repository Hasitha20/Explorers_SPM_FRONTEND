import React from 'react'
import {Link} from 'react-router-dom'

function FoodItem({food}) {
    
    return(
        
      
        
        <div className="food_card" >
                
      
               <img src={food.images.url} alt="" /> 

                <div className="food_box">
                    <h2 name={food.name}>{food.name}</h2>
                    <span>Rs.{food.price}</span>
                    <p>{food.description}</p>
                    <span>Intregents : {food.ingredients}</span>

                </div>
                <div className="row_btn">
                    <Link id="btn_buy" to="/login">
                        Buy
                    </Link>
                    <Link id="btn_view" to={`/detail/${food._id}`}>
                        View
                    </Link>
                    

                </div>

        </div>
        
        
        
    )
}
export default FoodItem