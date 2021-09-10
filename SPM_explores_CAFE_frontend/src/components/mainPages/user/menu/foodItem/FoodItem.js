import React from 'react'
import {Link} from 'react-router-dom'

function FoodItem({food}) {
    
    return(
        
      
        
        <div className="food_cards" >
                
      
               <img src={food.images.url} alt="" /> 

                <div className="food_boxs">
                    {/* //class name changed */}

                    <h2 name={food.name}>{food.name}</h2>
                    <span>Rs.{food.price}</span>
                    <p>{food.description}</p>
                    <span>Intregents : {food.ingredients}</span>

                </div>
                <div className="row_btns">
                    <Link id="btns_buy" to="/login">
                        Buy
                    </Link>
                    <Link id="btns_view" to={`/detail/${food._id}`}>
                        View
                    </Link>
                    

                </div>

        </div>
        
        
        
    )
}
export default FoodItem