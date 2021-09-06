import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../Globalstate'
import FoodItem from '../../user/menu/foodItem/FoodItem'

function DetailMenu(){
    const params = useParams()
    const state = useContext(GlobalState)
    const [foods] = state.menuAPI.foods
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params){
            foods.forEach(food => {
                if(food._id === params.id) setDetailProduct(food)
            })
        }

    },[params, foods])
    if(detailProduct.length === 0) return null;
    return(
        <div>
        <div className="detail">
            <img src={detailProduct.images.url} alt=""/>
            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.name}</h2>
                    <h6>code: {detailProduct.food_id}</h6>
                </div>
                
                <span>Rs. {detailProduct.price}</span>
                <p>Ingredients: {detailProduct.ingredients}</p>
                <p>Category: {detailProduct.category}</p>
                <p>Sold: {detailProduct.sold}</p>
                <p>Description: {detailProduct.description}</p>

                <Link to="/login" className="cart">Buy Now</Link>

            </div>
        </div>

        <div className="foods">
            
            <h2>Related Products</h2>
            <div>
            {
                
                foods.map(food => {
                    return food.category === detailProduct.category
                    ? <FoodItem key={food._id} food={food} /> : null
                })
            }
            
            </div>

        </div>
        </div>
    )
}

export default DetailMenu