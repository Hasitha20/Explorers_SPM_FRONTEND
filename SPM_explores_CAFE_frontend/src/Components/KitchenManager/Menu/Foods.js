import React, {useContext} from 'react'
import * as IoIcons5 from 'react-icons/io5'
import { GlobalState } from '../GlobalStateKM'
import FoodItem from '../item/FoodItem'

function Foods() {
    const state = useContext(GlobalState)
    const [foods] = state.foodsAPI.foods

    console.log(foods)

    return (
        <div>
            <div className="foodIcon">
                <IoIcons5.IoFastFood />
                <h4>All Foods List</h4>
            </div>
             
            <hr />
            <div className="foods">

                <div className="foodslist">

                    {
                        foods.map(food => {
                            return <FoodItem key={food._id} food={food}/>
                        })
                    }

                </div>

            </div>
            
        </div>
    )
}

export default Foods
