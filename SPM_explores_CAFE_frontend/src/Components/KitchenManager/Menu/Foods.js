import React, {useContext} from 'react'
import * as IoIcons5 from 'react-icons/io5'
import { GlobalState } from '../GlobalStateKM'
import FoodItem from '../item/FoodItem'

function Foods() {
    const state = useContext(GlobalState)
    const [foods] = state.foodsAPI.foods
    const [token ] = state.token
    // const [callback, setCallback] = state.foodsAPI.callback

    console.log(foods)

    return (
        <div>
            <div className="foodIcon">
                <div className="icon">
                    <IoIcons5.IoFastFood />
                    All Foods List
                </div>  
                            
                {/* <h4>All Foods List</h4> */}
               
            </div>
             
            <hr />
            <div className="foods">

                <div className="foodslist">

                    {
                        foods.map(food => {
                            return <FoodItem key={food._id} food={food} 
                            // callback={callback} setCallback={setCallback} token={token}
                            />
                        })
                    }

                </div>

            </div>
            
        </div>
    )
}

export default Foods
