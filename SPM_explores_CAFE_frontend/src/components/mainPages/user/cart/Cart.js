import React, {useContext, useState} from 'react'
import { GlobalState } from '../../../../Globalstate'
import {Link} from 'react-router-dom'
import { FaProductHunt } from 'react-icons/fa'

export default function Cart() {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart
    const [total, setTotal] = useState(0)

    if(cart.length === 0)
        return <h2 style={{textAlign:"center", fontSize:"5rem"}}>Empty Cart</h2>
    return (
        <div>
            {
                cart.map(food => (
                    <div className="detail cart">
                        <img src={food.images.url} alt="" />
                        <div className="box-cart">
                    
                                <h2>{food.name}</h2>
                        
                              
                            
                                <h3>Rs. {food.price * food.quantity}</h3>
                                <p>Ingredients: {food.ingredients}</p>
                                <p>Category: {food.category}</p>
                                <p>Sold: {food.sold}</p>
                                <p>Description: {food.description}</p>

                                <div className="amount">
                                    <button> - </button>
                                    <span>{food.quantity}</span>
                                    <button> + </button>
                                </div>

                                <div className="delete">X</div>
                            
                            

            </div>
        </div>
                ))
            }
            <div className="total">
                <h3>Total: Rs. {total}</h3>
                <Link to="#!">Payment</Link>
            </div>
        </div>
    )
}
