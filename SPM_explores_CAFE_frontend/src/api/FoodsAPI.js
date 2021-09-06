import React, { useState, useEffect } from 'react'
import axios from 'axios'


function FoodsAPI() {
    const [foods, setFoods] = useState([])

    const getFoods = async () => {
        const res = await axios.get('http://localhost:5000/api/foods')
        // setFoods(res.data.foods)
        setFoods(res.data.foods)
    }

    useEffect(() => {
        getFoods()
    },[])

    return  {
        foods: [foods, setFoods]
    }
}

export default FoodsAPI
